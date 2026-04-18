import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title",       title: "Service Title",              type: "string", validation: (R) => R.required() }),
    defineField({ name: "tagline",     title: "Tagline",                    type: "string" }),
    defineField({ name: "description", title: "Description",                type: "text"   }),
    defineField({ name: "features",    title: "Features / What's Included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "icon",        title: "Icon (Lucide name)",         type: "string" }),
    defineField({ name: "order",       title: "Sort Order",                 type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "tagline" } },
});
