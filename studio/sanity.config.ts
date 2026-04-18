import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name:      "rekha-portfolio",
  title:     "Rekha Portfolio CMS",
  projectId: "169nh9mf",
  dataset:   "production",
  plugins:   [structureTool(), visionTool()],
  schema:    { types: schemaTypes },
});
