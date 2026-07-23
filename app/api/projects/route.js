import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {

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


    if (
      !title ||
      !description ||
      !introduction
    ) {

      return NextResponse.json(

        {
          message:
            "Please fill all required fields.",
        },

        {
          status: 400,
        }

      );
    }


    const project = await prisma.project.create({

      data: {

        title,

        description,

        introduction,

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
            images?.map((image) => ({

              url: image.url,

              type: image.type,

            })) || [],
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

      project,

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        message:
          "Internal server error.",
      },

      {
        status: 500,
      }

    );
  }
}