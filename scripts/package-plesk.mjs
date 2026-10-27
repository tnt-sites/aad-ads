import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const source = path.resolve("dist");
const output = path.resolve("deploy");

await rm(output, { force: true, recursive: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
await writeFile(
  path.join(output, "_deploy-version.txt"),
  `${process.env.GITHUB_SHA ?? "local"}\n`,
);

const special = await readFile(
  path.join(output, "landing", "new-patient-special", "index.html"),
  "utf8",
);
if (!/new patient special/i.test(special) && !/Alabaster Aesthetic Dentistry/i.test(special)) {
  throw new Error("Packaged landing page is missing the New Patient Special.");
}

console.log(`Packaged ads subdomain build in ${output}.`);
