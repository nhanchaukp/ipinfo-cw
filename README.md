<div align="center">

# ⚡ ipinfo-cw

**Instant Cloudflare Trace to JSON API with a modern Tailwind CSS Stone landing page.**

[![Live Demo](https://img.shields.io/badge/Demo-trace.pheco.dev-f6821f?style=flat-square)](https://trace.pheco.dev)
[![GitHub Repository](https://img.shields.io/badge/GitHub-nhanchaukp%2Fipinfo--cw-292524?style=flat-square&logo=github)](https://github.com/nhanchaukp/ipinfo-cw)
[![Platform](https://img.shields.io/badge/Platform-Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Framework](https://img.shields.io/badge/Engine-Hono-E36002?style=flat-square&logo=hono&logoColor=white)](https://hono.dev)
[![License](https://img.shields.io/badge/License-MIT-78716c?style=flat-square)](LICENSE)

[**Live Demo**](https://trace.pheco.dev) • [**API Endpoint**](https://trace.pheco.dev/json) • [**Source Code**](https://github.com/nhanchaukp/ipinfo-cw)

</div>

---

## 📖 Overview

**`ipinfo-cw`** is a high-performance Cloudflare Worker that retrieves network connection diagnostics from `https://cloudflare.com/cdn-cgi/trace`, transforms raw key-value lines into clean structured JSON, and serves a developer-first landing page crafted with Tailwind CSS in an earthy `stone` color palette.

- **Demo**: [https://trace.pheco.dev](https://trace.pheco.dev)
- **API Endpoint**: [https://trace.pheco.dev/json](https://trace.pheco.dev/json)
- **Source**: [https://github.com/nhanchaukp/ipinfo-cw](https://github.com/nhanchaukp/ipinfo-cw)

---

## ✨ Features

- ⚡ **Global Edge Execution**: Deployed on Cloudflare Workers across 300+ data centers worldwide with sub-millisecond latency.
- 🔄 **Key-Value to JSON Conversion**: Reliably parses raw edge diagnostics (`key=value`) into standard, strictly formatted JSON.
- 🌐 **CORS & Zero Cache**: Cross-Origin Resource Sharing enabled with `no-cache` headers, ready for direct client-side integration from apps, websites, and scripts.
- 🎨 **Tailwind CSS Stone Theme**: Minimalist, developer-centric UI styled after the official Tailwind CSS website using warm dark stone tones (`stone-50` to `stone-950`).
- 🧩 **Lucide Vector Icons**: Clean SVG icons replacing emojis throughout the interface.
- 📋 **Toastr Notifications**: Interactive slide-in toast notifications when copying cURL commands or code snippets.
- 📱 **Smooth Scrolling**: Native `scroll-smooth` with sticky header offset handling.
- 🔍 **Production-Ready SEO**: Complete suite of Open Graph, Twitter cards, canonical tags, and Schema.org `WebApplication` JSON-LD structured data.
- 🌍 **Dynamic Domain Detection**: Automatically detects and adapts to custom domains (`trace.pheco.dev`), `*.workers.dev`, and `localhost` without hardcoded domains.

---

## 🚀 Quick Start

### Query via cURL

```bash
curl -s "https://trace.pheco.dev/json"
```

### Example JSON Response

```json
{
  "fl": "961f80",
  "h": "cloudflare.com",
  "ip": "118.69.182.125",
  "ts": "1789358412.000",
  "visit_scheme": "https",
  "uag": "curl/8.19.0",
  "colo": "SIN",
  "sliver": "050-tier1",
  "http": "http/2",
  "loc": "VN",
  "tls": "TLSv1.3",
  "sni": "plaintext",
  "warp": "off",
  "gateway": "off",
  "rbi": "off",
  "kex": "X25519MLKEM768"
}
```

### Usage Examples

#### JavaScript (Fetch)

```javascript
const res = await fetch("https://trace.pheco.dev/json");
const data = await res.json();
console.log("Your IP:", data.ip);
console.log("Nearest Colo:", data.colo);
```

#### Python

```python
import requests

response = requests.get("https://trace.pheco.dev/json")
trace = response.json()
print(f"IP: {trace.get('ip')}, Location: {trace.get('loc')}")
```

---

## 📊 Trace Parameters Reference

| Field (Key) | Description | Example |
| :--- | :--- | :--- |
| `ip` | Client IPv4 or IPv6 address making the connection | `118.69.182.125` |
| `colo` | 3-letter IATA code of nearest Cloudflare data center | `SIN`, `HKG`, `SJC` |
| `loc` | Two-letter country code (ISO 3166-1 alpha-2) | `VN`, `US`, `SG` |
| `http` | HTTP protocol version used for the connection | `http/2`, `http/3` |
| `tls` | Transport Layer Security (TLS) cryptographic version | `TLSv1.3` |
| `warp` | Connection routing status through Cloudflare WARP | `on` / `off` |
| `ts` | Unix epoch timestamp of when request was processed | `1789358412.000` |
| `uag` | User-Agent identification string sent by client | `Mozilla/5.0...` |

---

## 🛠️ Local Development

### 1. Clone the repository

```bash
git clone https://github.com/nhanchaukp/ipinfo-cw.git
cd ipinfo-cw
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

Visit [http://localhost:8787/](http://localhost:8787/) to view the landing page or [http://localhost:8787/json](http://localhost:8787/json) for the API.

---

## 🚢 Deployment

Deploy to Cloudflare Workers using Wrangler:

```bash
npm run deploy
```

> **Custom Domain Setup**: You can bind any custom domain (e.g., `trace.pheco.dev`) directly in your Cloudflare Dashboard under **Workers & Pages** > **ipinfo-cw** > **Settings** > **Triggers** > **Custom Domains**.

---

## 📂 Project Structure

```
.
├── src/
│   ├── index.js      # Hono router and API handler with dynamic host detection
│   └── landing.js    # Tailwind CSS Stone landing page with interactive code showcase
├── package.json      # Dependencies and scripts
├── wrangler.jsonc    # Cloudflare Worker configuration
├── .gitignore
└── README.md
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
