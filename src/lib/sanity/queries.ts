import { sanityClient } from "./client";

// Experience
export async function getExperiences() {
  return sanityClient.fetch(`
    *[_type == "experience"] | order(order asc) {
      _id, title, company, location, duration, startDate, endDate, current,
      industry, bullets, order
    }
  `);
}

// Skills
export async function getSkills() {
  return sanityClient.fetch(`
    *[_type == "skill"] | order(category asc, name asc) {
      _id, name, category, level
    }
  `);
}

// Services
export async function getServices() {
  return sanityClient.fetch(`
    *[_type == "service"] | order(order asc) {
      _id, title, description, icon, features[], order
    }
  `);
}

// Gallery
export async function getGalleryItems(category?: string) {
  const filter = category && category !== "all"
    ? `&& category == "${category}"`
    : "";
  return sanityClient.fetch(`
    *[_type == "galleryItem" ${filter}] | order(_createdAt desc) {
      _id, image, caption, category, date
    }
  `);
}

// Testimonials
export async function getTestimonials() {
  return sanityClient.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id, name, role, company, quote, photo, order
    }
  `);
}

// Social Links
export async function getSocialLinks() {
  return sanityClient.fetch(`
    *[_type == "socialLink"] | order(order asc) {
      _id, platform, handle, url, followerCount, order
    }
  `);
}

// Site Settings
export async function getSiteSettings() {
  return sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      tagline, heroHeading, heroSubheading, aboutText,
      email, phone, location, resumeFile, metaDescription,
      heroPhoto { asset { _ref } },
      ogImage { asset { _ref } }
    }
  `);
}

// Blog Posts
export async function getPosts(category?: string) {
  const filter = category && category !== "all"
    ? `&& category == "${category}"`
    : "";
  return sanityClient.fetch(`
    *[_type == "post" ${filter}] | order(featured desc, publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, category, readTime, featured,
      coverImage { asset { _ref } }
    }
  `);
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, excerpt, category, readTime, featured,
      coverImage { asset { _ref } },
      body[] {
        ...,
        _type == "image" => { ..., asset { _ref } }
      }
    }
  `, { slug });
}

export async function getRelatedPosts(category: string, excludeId: string) {
  return sanityClient.fetch(`
    *[_type == "post" && category == $category && _id != $excludeId] | order(publishedAt desc)[0...3] {
      _id, title, slug, publishedAt, excerpt, category, readTime,
      coverImage { asset { _ref } }
    }
  `, { category, excludeId });
}

// Featured / Bestseller items for home
export async function getFeaturedExperiences() {
  return sanityClient.fetch(`
    *[_type == "experience"] | order(order asc)[0...3] {
      _id, title, company, duration, industry
    }
  `);
}
