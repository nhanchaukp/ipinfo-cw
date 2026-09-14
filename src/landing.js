export function getLandingHtml({ host = 'localhost:8787', origin = 'http://localhost:8787' } = {}) {
  return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO Meta Tags -->
  <title>Cloudflare Trace to JSON API — ${host}</title>
  <meta name="title" content="Cloudflare Trace to JSON API — ${host}">
  <meta name="description" content="Instantly convert Cloudflare /cdn-cgi/trace network diagnostics into clean, structured JSON with sub-millisecond edge latency at ${host}.">
  <meta name="keywords" content="cloudflare, cdn-cgi/trace, cloudflare trace, trace to json, ip api, network diagnostics, cloudflare workers, edge api, json api, client ip">
  <meta name="author" content="${host}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${origin}/" id="meta-canonical">

  <!-- Favicon & Color Scheme -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg>">
  <meta name="theme-color" content="#0c0a09">
  <meta name="color-scheme" content="dark">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${origin}/" id="og-url">
  <meta property="og:title" content="Cloudflare Trace to JSON API — ${host}">
  <meta property="og:description" content="Instantly convert Cloudflare /cdn-cgi/trace network diagnostics into clean, structured JSON with sub-millisecond edge latency at ${host}.">
  <meta property="og:site_name" content="${host}">
  <meta property="og:locale" content="en_US">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="${origin}/" id="twitter-url">
  <meta name="twitter:title" content="Cloudflare Trace to JSON API — ${host}">
  <meta name="twitter:description" content="Instantly convert Cloudflare /cdn-cgi/trace network diagnostics into clean, structured JSON with sub-millisecond edge latency at ${host}.">

  <!-- JSON-LD Structured Data (Schema.org for Rich Results) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cloudflare Trace to JSON API",
    "url": "${origin}/",
    "description": "High-performance edge service converting Cloudflare connection metadata and /cdn-cgi/trace into structured JSON.",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
  </script>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            stone: {
              50: '#fafaf9',
              100: '#f5f5f4',
              200: '#e7e5e4',
              300: '#d6d3d1',
              400: '#a8a29e',
              500: '#78716c',
              600: '#57534e',
              700: '#44403c',
              800: '#292524',
              900: '#1c1917',
              950: '#0c0a09',
            }
          }
        }
      }
    }
  </script>

  <style>
    html {
      scroll-behavior: smooth;
    }
    /* Background grid with smooth edge mask */
    .bg-grid-stone {
      background-size: 32px 32px;
      background-image: 
        linear-gradient(to right, rgba(120, 113, 108, 0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(120, 113, 108, 0.06) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, #000 50%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, #000 50%, transparent 100%);
    }
    /* Syntax highlighting */
    .token-key { color: #f5f5f4; font-weight: 500; }
    .token-string { color: #a8a29e; }
    .token-number { color: #d6d3d1; }
    .token-boolean { color: #e7e5e4; font-weight: 600; }
  </style>
</head>

<body class="bg-stone-950 text-stone-200 font-sans antialiased min-h-screen flex flex-col selection:bg-stone-700 selection:text-stone-100">
  <!-- Subtle Background Effects -->
  <div class="fixed inset-0 bg-grid-stone pointer-events-none z-0"></div>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center">
    <div class="w-[850px] h-[400px] -translate-y-1/3 rounded-full bg-stone-500/10 blur-[140px]"></div>
  </div>

  <!-- Header / Navigation -->
  <header class="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950/95 backdrop-blur-md shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Brand Logo with dynamically detected host -->
      <a href="/" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-200 group-hover:border-stone-500 transition shadow-sm">
          <!-- Lucide Zap -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-200">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="font-bold text-base tracking-tight text-stone-100" id="nav-host">${host}</span>
          <span class="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">trace2json</span>
        </div>
      </a>

      <!-- Right actions / badge -->
      <div class="flex items-center gap-3">
        <div class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-stone-400 bg-stone-900 border border-stone-800">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Cloudflare Edge</span>
        </div>
        <a href="/json" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-white transition shadow-sm">
          <span>Get /json</span>
          <!-- Lucide ExternalLink -->
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h6v6"/>
            <path d="M10 14 21 3"/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="relative z-0 flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 pt-14 sm:pt-16 pb-20">
    <!-- Hero Section -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <!-- Badge Pill with dynamic host -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-stone-900 border border-stone-800 text-stone-400 shadow-sm mb-6 hover:border-stone-700 transition">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span id="hero-host">${host}</span>
        <span class="text-stone-600">|</span>
        <span class="font-mono text-stone-300">GET /json</span>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-100 mb-6 leading-[1.12]">
        Extract Cloudflare Trace
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600">
          instantly converted to JSON
        </span>
      </h1>

      <p class="text-base sm:text-lg text-stone-400 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
        Automatically retrieve edge diagnostics from <code class="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300">/cdn-cgi/trace</code> and parse key-value lines into structured, standard JSON with sub-millisecond latency.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button onclick="copyCurrentCurl()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-stone-100 text-stone-950 hover:bg-stone-200 transition shadow-sm font-mono">
          <!-- Lucide Terminal -->
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-700">
            <polyline points="4 17 10 11 4 5"/>
            <line x1="12" x2="20" y1="19" y2="19"/>
          </svg>
          <span id="hero-curl-label">curl ${host}/json</span>
        </button>
        <a href="#reference" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800 hover:text-stone-100 hover:border-stone-700 transition">
          <!-- Lucide Table -->
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-400">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M3 9h18"/>
            <path d="M3 15h18"/>
            <path d="M9 3v18"/>
          </svg>
          <span>View Schema Reference</span>
        </a>
      </div>
    </div>

    <!-- Code & Interactive Terminal Preview -->
    <div class="w-full max-w-4xl mx-auto mb-16">
      <div class="rounded-xl border border-stone-800 bg-stone-900 shadow-2xl shadow-stone-950 overflow-hidden ring-1 ring-white/5">
        <!-- Window Title Bar -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-stone-800 bg-stone-950">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-stone-700 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-stone-700 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-stone-700 inline-block"></span>
            <span class="ml-2 text-xs font-mono text-stone-500 font-medium hidden sm:inline">GET /json</span>
          </div>

          <!-- Code Tabs -->
          <div class="flex items-center gap-1 bg-stone-950 p-0.5 rounded-lg border border-stone-800">
            <button onclick="switchTab('response')" id="tab-btn-response" class="px-3 py-1 rounded-md text-xs font-medium transition text-stone-100 bg-stone-800 shadow-sm">Response</button>
            <button onclick="switchTab('curl')" id="tab-btn-curl" class="px-3 py-1 rounded-md text-xs font-medium transition text-stone-400 hover:text-stone-200">cURL</button>
            <button onclick="switchTab('fetch')" id="tab-btn-fetch" class="px-3 py-1 rounded-md text-xs font-medium transition text-stone-400 hover:text-stone-200">JavaScript</button>
            <button onclick="switchTab('python')" id="tab-btn-python" class="px-3 py-1 rounded-md text-xs font-medium transition text-stone-400 hover:text-stone-200">Python</button>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2">
            <button onclick="fetchTraceJson()" title="Reload data" class="p-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-md transition">
              <!-- Lucide RefreshCw -->
              <svg id="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M8 16H3v5"/>
              </svg>
            </button>
            <button onclick="copyActiveContent()" id="copy-btn" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 border border-stone-700 transition">
              <!-- Lucide Copy -->
              <svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span id="copy-text">Copy</span>
            </button>
          </div>
        </div>

        <!-- Meta Sub-header for Response -->
        <div id="meta-bar" class="flex items-center justify-between px-4 py-2 bg-stone-950/80 border-b border-stone-800 text-[11px] font-mono text-stone-400">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 200 OK
            </span>
            <span class="text-stone-700">·</span>
            <span id="meta-latency" class="text-stone-300">-- ms</span>
            <span class="text-stone-700">·</span>
            <span class="text-stone-400">application/json</span>
          </div>
          <div class="text-stone-500 text-[10px]">live edge trace</div>
        </div>

        <!-- Code Content Area -->
        <div class="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed max-h-[440px] bg-stone-900">
          <!-- Tab 1: Live Response -->
          <pre id="tab-content-response" class="text-stone-300"><code>// Fetching live data from /json...</code></pre>
          
          <!-- Tab 2: cURL -->
          <pre id="tab-content-curl" class="hidden text-stone-300"><code id="curl-code">curl -s "${origin}/json"</code></pre>
          
          <!-- Tab 3: JavaScript -->
          <pre id="tab-content-fetch" class="hidden text-stone-300"><code id="js-code">const res = await fetch('${origin}/json');
const trace = await res.json();
console.log('Client IP:', trace.ip);
console.log('Colo DataCenter:', trace.colo);</code></pre>
          
          <!-- Tab 4: Python -->
          <pre id="tab-content-python" class="hidden text-stone-300"><code id="py-code">import requests

res = requests.get('${origin}/json')
trace = res.json()
print(f"IP: {trace.get('ip')}, Location: {trace.get('loc')}")</code></pre>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
      <!-- Feature 1: Global Edge Network -->
      <div class="p-6 rounded-xl border border-stone-800 bg-stone-900 hover:border-stone-700 transition shadow-sm">
        <div class="w-10 h-10 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-300 mb-4 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <h3 class="text-base font-semibold text-stone-100 mb-2">Global Edge Network</h3>
        <p class="text-sm text-stone-400 leading-relaxed">
          Executes directly across 300+ Cloudflare data centers worldwide with sub-millisecond edge latency.
        </p>
      </div>

      <!-- Feature 2: Parse Key-Value -->
      <div class="p-6 rounded-xl border border-stone-800 bg-stone-900 hover:border-stone-700 transition shadow-sm">
        <div class="w-10 h-10 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-300 mb-4 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="m10 13-2 2 2 2"/>
            <path d="m14 17 2-2-2-2"/>
          </svg>
        </div>
        <h3 class="text-base font-semibold text-stone-100 mb-2">Automated KV Parsing</h3>
        <p class="text-sm text-stone-400 leading-relaxed">
          Reliably transforms raw key-value lines from <code class="font-mono text-xs text-stone-300 bg-stone-950 px-1 py-0.5 rounded border border-stone-800">/cdn-cgi/trace</code> into structured, strictly typed JSON.
        </p>
      </div>

      <!-- Feature 3: CORS & No-Cache -->
      <div class="p-6 rounded-xl border border-stone-800 bg-stone-900 hover:border-stone-700 transition shadow-sm">
        <div class="w-10 h-10 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-300 mb-4 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </svg>
        </div>
        <h3 class="text-base font-semibold text-stone-100 mb-2">CORS & Zero Cache</h3>
        <p class="text-sm text-stone-400 leading-relaxed">
          Enables any frontend app, script, or mobile client to query <code class="font-mono text-xs text-stone-300 bg-stone-950 px-1 py-0.5 rounded border border-stone-800">/json</code> directly without cross-origin restrictions.
        </p>
      </div>
    </div>

    <!-- Documentation / Reference Table -->
    <div id="reference" class="pt-6 scroll-mt-20">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-stone-100">Trace Parameters Reference</h2>
          <p class="text-sm text-stone-400 mt-1">Detailed description of all fields returned from Cloudflare edge diagnostics.</p>
        </div>
        <span class="text-xs font-mono text-stone-400 bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800">16+ fields</span>
      </div>

      <div class="border border-stone-800 rounded-xl overflow-hidden bg-stone-900 shadow-lg">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm border-collapse">
            <thead>
              <tr class="border-b border-stone-800 bg-stone-950 text-stone-400 font-mono text-xs uppercase tracking-wider">
                <th class="py-3 px-4 font-semibold">Field (Key)</th>
                <th class="py-3 px-4 font-semibold">Description</th>
                <th class="py-3 px-4 font-semibold">Example Value</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-800 text-stone-300">
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">ip</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">Client IPv4 or IPv6 address making the connection</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">118.69.182.125</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">colo</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">3-letter IATA code of the Cloudflare data center receiving the request</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">SIN, HKG, SJC</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">loc</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">Two-letter country code (ISO 3166-1 alpha-2)</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">VN, US, SG</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">http</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">HTTP protocol version used for the connection</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">http/2, http/3</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">tls</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">Transport Layer Security (TLS) cryptographic protocol version</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">TLSv1.3</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">warp</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">Connection routing status through Cloudflare WARP</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">on / off</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">ts</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">Unix epoch timestamp when the request was processed</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">1789358412.000</td>
              </tr>
              <tr class="hover:bg-stone-800/50 transition">
                <td class="py-3.5 px-4 font-mono font-medium text-stone-100">
                  <span class="px-1.5 py-0.5 rounded bg-stone-950 text-stone-200 border border-stone-800">uag</span>
                </td>
                <td class="py-3.5 px-4 text-stone-300">User-Agent identification string sent by the client</td>
                <td class="py-3.5 px-4 font-mono text-xs text-stone-400">Mozilla/5.0...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="relative z-0 border-t border-stone-800 bg-stone-950 text-stone-500 text-xs py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="font-semibold text-stone-300" id="footer-host">${host}</span>
        <span>— Cloudflare Trace to JSON API</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="/json" class="text-stone-400 hover:text-stone-200 transition font-mono">/json</a>
        <span>·</span>
        <a href="https://workers.cloudflare.com" target="_blank" rel="noopener" class="text-stone-400 hover:text-stone-200 transition">Cloudflare Workers</a>
      </div>
    </div>
  </footer>

  <!-- Client Script for Interactive Live Data & Tabs -->
  <script>
    let rawJsonResponse = "";
    let activeTab = "response";

    // Dynamically update UI based on client's actual host and origin
    const liveHost = window.location.host;
    const liveOrigin = window.location.origin;
    const curlCommand = 'curl -s "' + liveOrigin + '/json"';

    const navHost = document.getElementById("nav-host");
    if (navHost) navHost.textContent = liveHost;

    const heroHost = document.getElementById("hero-host");
    if (heroHost) heroHost.textContent = liveHost;

    const heroCurlLabel = document.getElementById("hero-curl-label");
    if (heroCurlLabel) heroCurlLabel.textContent = "curl " + liveHost + "/json";

    const curlCodeEl = document.getElementById("curl-code");
    if (curlCodeEl) curlCodeEl.textContent = curlCommand;

    const jsCodeEl = document.getElementById("js-code");
    if (jsCodeEl) {
      jsCodeEl.textContent = "const res = await fetch('" + liveOrigin + "/json');\\n"
        + "const trace = await res.json();\\n"
        + "console.log('Client IP:', trace.ip);\\n"
        + "console.log('Colo DataCenter:', trace.colo);";
    }

    const pyCodeEl = document.getElementById("py-code");
    if (pyCodeEl) {
      pyCodeEl.textContent = "import requests\\n\\n"
        + "res = requests.get('" + liveOrigin + "/json')\\n"
        + "trace = res.json()\\n"
        + "print(f\\"IP: {trace.get('ip')}, Location: {trace.get('loc')}\\")";
    }

    const footerHost = document.getElementById("footer-host");
    if (footerHost) footerHost.textContent = liveHost;

    const canonicalEl = document.getElementById("meta-canonical");
    if (canonicalEl) canonicalEl.setAttribute("href", liveOrigin + "/");
    const ogUrlEl = document.getElementById("og-url");
    if (ogUrlEl) ogUrlEl.setAttribute("content", liveOrigin + "/");
    const twitterUrlEl = document.getElementById("twitter-url");
    if (twitterUrlEl) twitterUrlEl.setAttribute("content", liveOrigin + "/");

    // Fetch data from /json endpoint
    async function fetchTraceJson() {
      const respEl = document.getElementById("tab-content-response");
      const latencyEl = document.getElementById("meta-latency");
      const refreshIcon = document.getElementById("refresh-icon");

      if (refreshIcon) refreshIcon.classList.add("animate-spin");
      respEl.innerHTML = '<code>// Fetching live data from /json...</code>';

      const startTime = performance.now();

      try {
        const res = await fetch("/json");
        const duration = Math.round(performance.now() - startTime);
        if (latencyEl) latencyEl.textContent = duration + " ms";

        const data = await res.json();
        rawJsonResponse = JSON.stringify(data, null, 2);

        // Stone-style syntax highlighting
        const formatted = rawJsonResponse
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g, function (match) {
            let cls = 'token-number';
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = 'token-key';
              } else {
                cls = 'token-string';
              }
            } else if (/true|false/.test(match)) {
              cls = 'token-boolean';
            }
            return '<span class="' + cls + '">' + match + '</span>';
          });

        respEl.innerHTML = '<code>' + formatted + '</code>';
      } catch (err) {
        respEl.innerHTML = '<code>// Error fetching data: ' + err.message + '</code>';
      } finally {
        if (refreshIcon) refreshIcon.classList.remove("animate-spin");
      }
    }

    // Switch Tab
    function switchTab(tab) {
      activeTab = tab;
      const tabs = ['response', 'curl', 'fetch', 'python'];
      
      tabs.forEach(t => {
        const btn = document.getElementById('tab-btn-' + t);
        const content = document.getElementById('tab-content-' + t);
        if (t === tab) {
          btn.className = "px-3 py-1 rounded-md text-xs font-medium transition text-stone-100 bg-stone-800 shadow-sm";
          content.classList.remove("hidden");
        } else {
          btn.className = "px-3 py-1 rounded-md text-xs font-medium transition text-stone-400 hover:text-stone-200";
          content.classList.add("hidden");
        }
      });

      const metaBar = document.getElementById('meta-bar');
      if (tab === 'response') {
        metaBar.classList.remove('hidden');
      } else {
        metaBar.classList.add('hidden');
      }
    }

    // Toastr Notification Helper
    let toastTimer = null;
    function showToast(title = "Copied to clipboard!", desc = "") {
      const toast = document.getElementById("toast");
      const titleEl = document.getElementById("toast-title");
      const descEl = document.getElementById("toast-desc");

      if (!toast) return;

      if (titleEl) titleEl.textContent = title;
      if (descEl) {
        if (desc) {
          descEl.textContent = desc;
          descEl.classList.remove("hidden");
        } else {
          descEl.classList.add("hidden");
        }
      }

      if (toastTimer) clearTimeout(toastTimer);

      // Show toast with slide up and fade in
      toast.classList.remove("translate-y-8", "opacity-0", "pointer-events-none");
      toast.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");

      // Auto dismiss after 2.5s
      toastTimer = setTimeout(() => {
        toast.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
        toast.classList.add("translate-y-8", "opacity-0", "pointer-events-none");
      }, 2500);
    }

    // Copy Content of currently open tab
    function copyActiveContent() {
      let textToCopy = "";
      let detail = "";
      if (activeTab === "response") {
        textToCopy = rawJsonResponse;
        detail = "JSON response copied";
      } else if (activeTab === "curl") {
        textToCopy = curlCommand;
        detail = "cURL command copied";
      } else if (activeTab === "fetch") {
        textToCopy = document.getElementById("tab-content-fetch").innerText;
        detail = "JavaScript snippet copied";
      } else if (activeTab === "python") {
        textToCopy = document.getElementById("tab-content-python").innerText;
        detail = "Python snippet copied";
      }

      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Copied to clipboard!", detail);
        const copyTextEl = document.getElementById("copy-text");
        const copyIconEl = document.getElementById("copy-icon");
        
        if (copyTextEl) copyTextEl.textContent = "Copied!";
        if (copyIconEl) copyIconEl.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';

        setTimeout(() => { 
          if (copyTextEl) copyTextEl.textContent = "Copy"; 
          if (copyIconEl) copyIconEl.innerHTML = '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>';
        }, 2000);
      });
    }

    function copyCurrentCurl() {
      navigator.clipboard.writeText(curlCommand).then(() => {
        showToast("Copied to clipboard!", curlCommand);
      }).catch(() => {
        showToast("Failed to copy", "Please copy manually");
      });
    }

    // Automatically fetch on page load
    window.addEventListener("DOMContentLoaded", fetchTraceJson);
  </script>

  <!-- Toast Notification (Toastr) -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out translate-y-8 opacity-0 pointer-events-none flex items-center gap-3 px-4 py-3 rounded-xl bg-stone-900 border border-stone-700/90 shadow-2xl shadow-stone-950 text-stone-100 text-xs sm:text-sm font-medium ring-1 ring-white/10">
    <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
    <div class="flex flex-col">
      <span id="toast-title" class="text-stone-100 font-semibold leading-tight">Copied to clipboard!</span>
      <span id="toast-desc" class="text-stone-400 text-[11px] font-mono leading-tight mt-0.5"></span>
    </div>
  </div>
</body>
</html>`;
}
