import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(params.id),
      },

      include: {
        images: true,
        features: true,
        benefits: true,
        steps: true,
        problems: true,
        solutions: true,
      },
    });

    if (!project) {
      return NextResponse.json(
        {
          message: "Project not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params }) {

  try {

    const body = await request.json();

    const {

      title,
      description,
      introduction,

      features,
      benefits,
      steps,

      problems,
      solutions,

      images,

    } = body;

    const projectId =
      Number(params.id);

    await prisma.project.update({

      where: {

        id: projectId,

      },

      data: {

        title,

        description,

        introduction,

      },

    });

    await prisma.projectFeature.deleteMany({

      where: {

        projectId,

      },

    });

    await prisma.projectBenefit.deleteMany({

      where: {

        projectId,

      },

    });

    await prisma.projectStep.deleteMany({

      where: {

        projectId,

      },

    });

    await prisma.projectProblem.deleteMany({

      where: {

        projectId,

      },

    });

    await prisma.projectSolution.deleteMany({

      where: {

        projectId,

      },

    });

    await prisma.projectImage.deleteMany({

      where: {

        projectId,

      },

    });

    const updatedProject =
      await prisma.project.update({

        where: {

          id: projectId,

        },

        data: {

          features: {

            create: features || [],

          },

          benefits: {

            create: benefits || [],

          },

          steps: {

            create: steps || [],

          },

          problems: {

            create: problems || [],

          },

          solutions: {

            create: solutions || [],

          },

          images: {

            create:
              images?.map(
                (image) => ({

                  url: image.url,

                  type: image.type,

                })
              ) || [],

          },

        },

        include: {

          images: true,

          features: true,

          benefits: true,

          steps: true,

          problems: true,

          solutions: true,

        },

      });

    return NextResponse.json({

      success: true,

      project: updatedProject,

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {

        message:
          "Internal server error",

      },

      {

        status: 500,

      }

    );
  }
}


// Delete
export async function DELETE(request, { params }) {

  try {

    const projectId = Number(params.id);

    await prisma.project.delete({

      where: {

        id: projectId,

      },

    });

    return NextResponse.json({

      success: true,

      message: "Project deleted successfully.",

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        message: "Internal server error.",
      },

      {
        status: 500,
      }

    );
  }
}