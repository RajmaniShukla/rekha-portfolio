import { defineType, defineField } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "title",    title: "Job Title",  type: "string", validation: (R) => R.required() }),
    defineField({ name: "company",  title: "Company",    type: "string", validation: (R) => R.required() }),
    defineField({ name: "location", title: "Location",   type: "string" }),
    defineField({ name: "duration", title: "Duration",   type: "string", description: "e.g. Apr 2022 – Jan 2023" }),
    defineField({ name: "industry", title: "Industry",   type: "string",
      options: { list: ["Marketing", "Sales", "EdTech", "Real Estate", "Operations", "BPO", "Other"] }
    }),
    defineField({ name: "order",    title: "Sort Order", type: "number", description: "Lower = shown first" }),
    defineField({ name: "bullets",  title: "Key Achievements", type: "array", of: [{ type: "string" }] }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "company" } },
});
