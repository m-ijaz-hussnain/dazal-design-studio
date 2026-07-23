import ProjectPage from "@/screens/Project";
import { prisma } from "@/lib/prisma";


export async function getProject(title) {

  const project = await prisma.project.findUnique({
    where: {
      title: title,
    },

    include: {
      images: true,
      features: true,
      problems: true,
      solutions: true,
      benefits: true,
      steps: true,
    },
  });

  return project;
}


export default async function Project({ params }) {

  const { project } = await params;

  console.log("PARAM:", project);

  const data = await getProject(project);

  console.log("PROJECT:", data);


  if (!data) {
    return <div>Project not found</div>;
  }


  return <ProjectPage project={data} />;

}