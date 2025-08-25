import { NextResponse } from 'next/server';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import ts from 'typescript';

const baseUrl = 'https://www.deine-seite.de';

// 1️⃣ Statische Routen aus app-Verzeichnis
function getStaticRoutes(): string[] {
  const files = glob.sync('app/**/page.tsx');
  return files.map(f => {
    let route = f.replace('app', '').replace('/page.tsx', '');
    return route === '' ? '/' : route;
  });
}

// 2️⃣ Dynamische Routen aus APIs oder DB
async function getDynamicRoutes(): Promise<string[]> {
  const routes: string[] = [];

  // Beispiel: Blogposts von API
  try {
    const posts = await fetch('https://www.deine-seite.de/api/posts').then(res => res.json());
    posts.forEach((p: any) => routes.push(`/blog/${p.slug}`));
  } catch (err) {
    console.log('Keine Posts gefunden');
  }

  // Beispiel: Produkte von API
  try {
    const products = await fetch('https://www.deine-seite.de/api/products').then(res => res.json());
    products.forEach((p: any) => routes.push(`/produkte/${p.slug}`));
  } catch (err) {
    console.log('Keine Produkte gefunden');
  }

  return routes;
}

// 3️⃣ Interne Anker aus React-Komponenten
function getAnchorsFromComponents(): string[] {
  const files = glob.sync('app/**/*.tsx');
  const anchors: string[] = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const source = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

    function visit(node: ts.Node) {
      if (
        ts.isJsxAttribute(node) &&
        node.name.getText() === 'id' &&
        node.initializer &&
        ts.isStringLiteral(node.initializer)
      ) {
        anchors.push('#' + node.initializer.text);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  });

  return anchors;
}

// 4️⃣ Sitemap generieren
export async function GET() {
  const staticRoutes = getStaticRoutes();
  const dynamicRoutes = await getDynamicRoutes();
  const anchors = getAnchorsFromComponents();

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach(route => {
    const fullUrl = `${baseUrl}${route}`;
    xml += `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;

    anchors.forEach(anchor => {
      xml += `  <url>\n    <loc>${fullUrl}${anchor}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <priority>0.5</priority>\n  </url>\n`;
    });
  });

  xml += `</urlset>`;

  return NextResponse.xml(xml);
}
