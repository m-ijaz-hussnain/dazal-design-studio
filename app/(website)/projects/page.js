import ProjectsPage from "@/screens/Projects";

import { prisma } from "@/lib/prisma";

export default async function Projects() {

  const projects = await prisma.project.findMany({

    include: {
      images: true,
      features: true,
      problems: true,
      solutions: true,
      benefits: true,
      steps: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <ProjectsPage projects={projects} />

  );
}