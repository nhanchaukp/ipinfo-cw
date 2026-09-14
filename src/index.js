import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getLandingHtml } from './landing.js';

const app = new Hono();

// Enable CORS for /json endpoint
app.use('/json', cors());

// Home page: Dynamic Landing page based on request host & origin
app.get('/', (c) => {
  const url = new URL(c.req.url);
  return c.html(getLandingHtml({ host: url.host, origin: url.origin }));
});

// Endpoint /json: Fetch trace data from Cloudflare and convert to JSON
app.get('/json', async (c) => {
  try {
    const traceResponse = await fetch('https://cloudflare.com/cdn-cgi/trace');

    if (!traceResponse.ok) {
      return c.json(
        { error: 'Failed to fetch trace data from Cloudflare' },
        traceResponse.status
      );
    }

    const traceText = await traceResponse.text();

    // Parse key=value lines into JSON Object
    const jsonData = {};
    for (const line of traceText.trim().split('\n')) {
      const separatorIndex = line.indexOf('=');
      if (separatorIndex !== -1) {
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        if (key) {
          jsonData[key] = value;
        }
      }
    }

    return c.json(jsonData, 200, {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    });
  } catch (err) {
    return c.json({ error: err.message || 'Internal Server Error' }, 500);
  }
});

// 404 handler
app.notFound((c) => {
  return c.json(
    {
      message: 'Not Found. Please visit / for landing page or /json for trace data.',
    },
    404
  );
});

export default app;
