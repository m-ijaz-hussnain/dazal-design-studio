import { prisma } from "@/lib/prisma";

import ProjectTable from "@/components/Admin/ProjectTable";

export default async function ProjectsPage() {

  const projects = await prisma.project.findMany({

    include: {
      images: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (

    <div>

      <ProjectTable projects={projects} />

    </div>

  );
}