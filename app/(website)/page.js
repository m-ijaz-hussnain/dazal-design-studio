import HomePage from "@/screens/Home";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const projects = await prisma.project.findMany({

    include: {
      images: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 4,
  });

  return <HomePage projects={projects} />;
}