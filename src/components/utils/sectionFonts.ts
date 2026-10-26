import fonts from "@data/fonts.json";

// Per-section font overrides for landing/PEP sections (the `fontHeadings` /
// `fontBody` dropdowns). Values are ids from src/data/fonts.json — add a font
// there (id, name, CSS family, stylesheet url) and it shows up in every
// section's dropdown via `data_config.fonts` in cloudcannon.config.yml.
//
// The override re-points --font-headings / --font-body on the section element,
// so component CSS keeps using those tokens. `!important` is needed because
// BaseLayout's branding rule sets them with !important on [data-theme="default"],
// which CustomSection usually is.
export const sectionFonts = (fontHeadings?: string, fontBody?: string) => {
  const headings = fonts.find((font) => font.id === fontHeadings);
  const body = fonts.find((font) => font.id === fontBody);

  return {
    style: [
      headings && `--font-headings: ${headings.family} !important`,
      body && `--font-body: ${body.family} !important`,
    ]
      .filter(Boolean)
      .join("; "),
    stylesheets: [...new Set([headings?.url, body?.url].filter((url): url is string => !!url))],
  };
};
