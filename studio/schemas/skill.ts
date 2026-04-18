import { defineType, defineField } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name",     title: "Skill Name",    type: "string", validation: (R) => R.required() }),
    defineField({ name: "category", title: "Category",      type: "string",
      options: { list: ["Sales & Strategy", "Business Development", "Digital Marketing", "Leadership & Operations"] }
    }),
    defineField({ name: "level",    title: "Level (0–100)", type: "number", validation: (R) => R.min(0).max(100) }),
    defineField({ name: "order",    title: "Sort Order",    type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "category" } },
});
