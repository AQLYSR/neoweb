import { defineCollection, z } from "astro:content";

// Define a schema for each collection you'd like to validate.
const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    type: z.enum(["blog", "project"]),
  }),
});

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string(),
    status: z.enum(["read", "reading", "want to read"]),
    rating: z.number().min(1).max(5).optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  articles: articlesCollection,
  books: booksCollection,
};
