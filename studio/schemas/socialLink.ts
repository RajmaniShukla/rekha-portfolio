import { defineType, defineField } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "document",
  fields: [
    defineField({ name: "platform",      title: "Platform",       type: "string",
      options: { list: ["Instagram", "LinkedIn"] },
      validation: (R) => R.required()
    }),
    defineField({ name: "handle",        title: "Handle / Name",  type: "string" }),
    defineField({ name: "url",           title: "Profile URL",    type: "url" }),
    defineField({ name: "followerCount", title: "Follower Count", type: "string", description: "e.g. 12.4K" }),
    defineField({ name: "order",         title: "Sort Order",     type: "number" }),
  ],
  preview: { select: { title: "platform", subtitle: "handle" } },
});
