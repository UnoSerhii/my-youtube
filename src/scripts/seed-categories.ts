import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Comedy",
  "Drama",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Crime",
  "Documentary",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western"
]

async function main() {
  console.log("🌱 Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Description for ${name}`,
    }))

    await db.insert(categories).values(values);
    console.log("✅ Categories seeded");
    
  } catch (error) {
    console.error("🚨 Error seeding categories", error);
    process.exit(1);
  }

}

main();