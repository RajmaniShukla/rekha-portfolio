import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "tagline",         title: "Tagline",              type: "string" }),
    defineField({ name: "heroHeading",     title: "Hero Heading",         type: "string" }),
    defineField({ name: "heroSubheading",  title: "Hero Subheading",      type: "text"   }),
    defineField({ name: "heroPhoto",       title: "Hero / Profile Photo", type: "image",  options: { hotspot: true } }),
    defineField({ name: "aboutText",       title: "About Text (short)",   type: "text"   }),
    defineField({ name: "email",           title: "Contact Email",        type: "string" }),
    defineField({ name: "phone",           title: "Phone Number",         type: "string" }),
    defineField({ name: "location",        title: "Location",             type: "string" }),
    defineField({ name: "resumeFile",      title: "Resume PDF",           type: "file"   }),
    defineField({ name: "metaDescription", title: "SEO Meta Description", type: "text"   }),
    defineField({ name: "ogImage",         title: "OG / Social Image",    type: "image",  options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
