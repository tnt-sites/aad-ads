# Page themes

Optional colour/font sets for landing and PEP pages. Editors pick one from the
**Page theme** dropdown on the page; blank means the page uses `src/data/branding.json`.

Each theme is one JSON file here, named `{id}.json`, with the same keys as
`branding.json`. Only include the keys the theme changes — everything else falls
back to the site branding. `src/layouts/BaseLayout.astro` merges the file over
`branding.json` and outputs the same `:root` CSS variables.

```json
{
  "name": "Example",
  "colorBrand": "#0d5f78",
  "colorBrandSecondary": "#dbe45a",
  "extraColors": [{ "variable": "--color-accent-1", "value": "#f28c28" }],
  "headingsFont": { "fontFamily": "\"Fredoka\", sans-serif" },
  "bodyFont": { "fontFamily": "\"Nunito\", sans-serif" },
  "accentFont": { "fontFamily": "\"Caveat Brush\", cursive" },
  "fontLinks": ["https://fonts.googleapis.com/css2?family=Fredoka&family=Nunito&display=swap"]
}
```

- Colour keys: `colorBrand`, `colorBrandSecondary`, `colorBrandTertiary`, `colorBrandSubtle`,
  `colorBrandOn`, `colorTextOnBrand`, `colorLink`, `colorLinkHover`.
- `extraColors` can set any other variable. `--color-accent-1` / `--color-accent-2` are spare
  slots (default: brand / brand secondary) that show up as "Accent 1/2" in component colour dropdowns.
- Fonts: `headingsFont` → `--font-headings`, `bodyFont` → `--font-body`, `accentFont` → `--font-accent`
  (decorative script font; defaults to the headings font).
- `fontLinks` are loaded in addition to the site's font links, only on pages using the theme.

**Adding a theme:** create the file, then add `{ id, name }` to `_select_data.pageThemes` in
`cloudcannon.config.yml` so it appears in the dropdown.
