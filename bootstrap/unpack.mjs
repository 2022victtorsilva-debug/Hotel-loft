import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname } from "node:path";
import { gunzipSync } from "node:zlib";

const parts = Array.from({ length: 6 }, (_, index) =>
  readFileSync(`bootstrap/payload.part${String(index + 1).padStart(2, "0")}`, "utf8"),
);

const files = JSON.parse(
  gunzipSync(Buffer.from(parts.join(""), "base64")).toString("utf8"),
);

for (const [path, content] of Object.entries(files)) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

rmSync("bootstrap", { recursive: true, force: true });
rmSync(".github/workflows/bootstrap.yml", { force: true });

console.log(`Wrote ${Object.keys(files).length} project files.`);
