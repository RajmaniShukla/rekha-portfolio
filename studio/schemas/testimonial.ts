import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name",    title: "Person Name",  type: "string", validation: (R) => R.required() }),
    defineField({ name: "role",    title: "Role / Title", type: "string" }),
    defineField({ name: "company", title: "Company",      type: "string" }),
    defineField({ name: "quote",   title: "Quote",        type: "text",   validation: (R) => R.required() }),
    defineField({ name: "photo",   title: "Photo",        type: "image",  options: { hotspot: true } }),
    defineField({ name: "order",   title: "Sort Order",   type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "company" } },
});
