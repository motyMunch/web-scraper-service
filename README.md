# Web Scraper Service

A lightweight and extensible Node.js + Express.js + TypeScript service for scraping structured summaries from arbitrary websites using Puppeteer.

---

## 🚀 Features

- Accepts any valid HTTP/HTTPS URL
- Uses Puppeteer to fetch and render pages (including dynamic content)
- Extracts structured content such as:
  - Title
  - Description
  - Author
  - Publish Date
  - Summary of main text
  - Keywords (top 5 frequent words)
  - Images and Videos
  - Open Graph metadata (e.g., `og:image`)

---

## 📦 API

### `POST /scrape`

Scrapes and summarizes the given website.

#### Request Body

```json
{
  "url": "https://example.com"
}
```

#### Successful Response

```json
{
  "url": "https://example.com",
  "title": "Example Domain",
  "description": "This domain is for use in illustrative examples...",
  "author": "John Doe",
  "publishDate": "2024-01-01",
  "keywords": ["example", "domain", "illustrative", "purpose", "content"],
  "summary": "This domain is established to be used for...",
  "images": ["https://example.com/image.png"],
  "videos": [],
  "ogImage": "https://example.com/og-image.jpg"
}
```

#### Error Response

```json
{
  "status": "Bad Request",
  "error": {
    "message": "Invalid or unsupported URL"
  }
}
```

---

## ⚙️ How It Works

1. **Validation:** Checks if the URL is valid and uses HTTP or HTTPS.
2. **Scraping:** Uses Puppeteer to render the page and extract the HTML.
3. **Parsing:** Loads the HTML with Cheerio and selects key elements.
4. **Summarization:** Extracts useful content (title, meta, paragraphs, images, etc.).
5. **Keyword Extraction:** Performs basic frequency analysis, excluding stopwords.

---

## 🛠 Tech Stack

- Node.js + Express.js
- TypeScript
- Puppeteer (browser automation)
- Cheerio (HTML parsing)

---

## 🧪 Local Development

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run locally**

   ```sh
   npm run dev
   ```

3. **Build and run production**

   ```sh
   npm run build && npm start
   ```

---

## 📌 Notes

- Works with most real-world pages (blogs, product pages, documentation)
- Does not rely on any specific page structure
- Easily extendable with custom scraping logic for known site types
# web-scraper-service
