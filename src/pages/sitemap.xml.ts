import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://bookstarshine.com";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = [
    "",
    "/services",
    "/book",
    "/faq",
    "/about",
    "/scope"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    return `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}