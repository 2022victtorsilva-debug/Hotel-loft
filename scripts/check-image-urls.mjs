import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/config/site.ts", import.meta.url), "utf8");
const matches = [
  ...source.matchAll(/https:\/\/images\.unsplash\.com\/photo-[^?"'\s]+/g),
].map(([url]) => url);
const urls = [...new Set(matches)];

if (!urls.length) {
  throw new Error("Nenhuma URL ilustrativa do Unsplash encontrada em src/config/site.ts.");
}

for (const baseUrl of urls) {
  const checkUrl = `${baseUrl}?auto=format&fit=crop&w=64&q=20`;
  const response = await fetch(checkUrl, {
    redirect: "follow",
    headers: { "User-Agent": "barreiras-loft-ci/1.0" },
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    throw new Error(`Imagem indisponível (${response.status}): ${baseUrl}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith("image/")) {
    throw new Error(`Resposta não é imagem (${contentType || "sem content-type"}): ${baseUrl}`);
  }

  await response.body?.cancel();
  console.log(`✓ ${baseUrl}`);
}

console.log(`Imagens verificadas: ${urls.length}`);
