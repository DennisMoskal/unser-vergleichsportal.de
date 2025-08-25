import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import fg from "fast-glob";

export async function GET() {
  const pagesDir = path.join(process.cwd(), "src/app");

  // Alle .tsx-Seiten erfassen (außer sitemap selbst)
  const files = await fg(["**/page.tsx"], {
    cwd: pagesDir,
    ignore: ["sitemap.xml/**", "**/route.ts"],
  });

  const baseUrl = "https://smart-finanz.vercel.app";

  const urls = files.map((file) => {
    let route = file.replace("/page.tsx", "");
    route = route === "page" ? "" : `/${route}`;
    return `${baseUrl}${route}`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
