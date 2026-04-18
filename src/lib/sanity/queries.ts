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

// Featured / Bestseller items for home
export async function getFeaturedExperiences() {
  return sanityClient.fetch(`
    *[_type == "experience"] | order(order asc)[0...3] {
      _id, title, company, duration, industry
    }
  `);
}
