import { defineType, defineField } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({ name: "image",    title: "Image",      type: "image", options: { hotspot: true }, validation: (R) => R.required() }),
    defineField({ name: "caption",  title: "Caption",    type: "string" }),
    defineField({ name: "category", title: "Category",   type: "string",
      options: { list: ["Headshots", "Events", "Speaking", "Lifestyle"] }
    }),
    defineField({ name: "date",     title: "Date",       type: "date" }),
    defineField({ name: "order",    title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "caption", media: "image", subtitle: "category" } },
});
