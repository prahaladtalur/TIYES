import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });

for (const entry of [
  "index.html", "styles.css", "script.js", "logo.png", "ahan.html",
  "dallas.html", "dubai.html", "fabian.html", "handbook.html",
  "prahalad.html", "rajdeep.html", "seattle.html", "team.html", "vienna.html"
]) {
  await cp(join(root, entry), join(client, entry));
}

await mkdir(join(dist, "server"), { recursive: true });
await writeFile(join(dist, "server", "index.js"), `
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  }
};
`);
