# Cloudflare Trace to JSON API (`trace.pheco.dev`)

High-performance Cloudflare Worker converting `/cdn-cgi/trace` into structured JSON with a developer-focused Tailwind CSS landing page.

- **Home (`/`)**: Tailwind CSS Stone-themed landing page featuring live edge trace inspection, schema reference table, and copyable code snippets.
- **Endpoint (`/json`)**: Fetches network connection diagnostics from `https://cloudflare.com/cdn-cgi/trace`, parses key-value lines into structured JSON, and returns with CORS enabled.

## Project Structure

```
.
├── package.json
├── wrangler.jsonc
└── src
    ├── index.js     # API router and request handler
    └── landing.js   # Landing page template
```

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit: `http://localhost:8787/` or `http://localhost:8787/json`

## Deployment

Deploy to Cloudflare Workers with custom domain `trace.pheco.dev`:

```bash
npm run deploy
```
