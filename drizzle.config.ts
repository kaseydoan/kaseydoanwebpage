import { defineConfig } from "drizzle-kit";

// Only require DATABASE_URL if we're not in development mode
// In development, the app uses in-memory storage
if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required in production. Please ensure the database is provisioned.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://localhost:5432/dummy",
  },
});
