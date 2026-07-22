import { PrismaClient } from "@prisma/client";
import { projects } from "../../mocks/projects.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();
  await prisma.admin.deleteMany();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    },
  });

  for (const item of projects) {
    await prisma.project.create({
      data: {
        title: item.title,
        description: item.description,
        introduction: item.introduction,

        images: {
          create: item.images.map((image) => ({
            url: image,
          })),
        },

        features: {
          create: item.features.map((feature) => ({
            title: feature.title,
          })),
        },

        problems: {
          create: item.problem.map((problem) => ({
            title: problem.title,
            description: problem.description,
          })),
        },

        solutions: {
          create: item.solution.map((solution) => ({
            title: solution.title,
            description: solution.description,
          })),
        },

        benefits: {
          create: item.benefits.map((benefit) => ({
            title: benefit.title,
          })),
        },

        steps: {
          create: item.steps.map((step) => ({
            title: step.title,
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    console.log("Database seeded successfully");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });