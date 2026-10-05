import * as yaml from "js-yaml";

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  // Koppen: een enter in de tekst wordt een nieuwe regel.
  eleventyConfig.addFilter("regels", (s) => esc(s).trim().split(/\r?\n/).join("<br>"));

  // Lopende tekst: een lege regel wordt een nieuwe alinea.
  eleventyConfig.addFilter("alineas", (s) =>
    esc(s).trim().split(/\r?\n\s*\r?\n/).filter(Boolean)
      .map((p) => `<p>${p.replace(/\r?\n/g, " ")}</p>`).join("\n"));

  // "06 12 34 56 78" -> "+31612345678"
  eleventyConfig.addFilter("tel", (s) => {
    const d = String(s ?? "").replace(/[^\d+]/g, "");
    return d.startsWith("0") ? "+31" + d.slice(1) : d;
  });

  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  return { dir: { input: "src", output: "_site" } };
}
