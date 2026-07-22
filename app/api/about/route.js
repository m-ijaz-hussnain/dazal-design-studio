import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {

  try {

    const about = await prisma.about.findFirst();

    return NextResponse.json(about);

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

export async function POST(request) {

  try {

    const body = await request.json();

    const {

      heroTitle,
      heroDescription,
      sectionTitle,
      sectionSubtitle,
      imageOne,
      imageTwo,
      imageThree,

    } = body;

    const existingAbout =
      await prisma.about.findFirst();

    let about;

    if (existingAbout) {

      about = await prisma.about.update({

        where: {

          id: existingAbout.id,

        },

        data: {
          heroTitle,
          heroDescription,
          sectionTitle,
          sectionSubtitle,
          imageOne,
          imageTwo,
          imageThree,
        },

      });

    } else {

      about = await prisma.about.create({

        data: {
          heroTitle,
          heroDescription,
          sectionTitle,
          sectionSubtitle,
          imageOne,
          imageTwo,
          imageThree,
        },

      });
    }

    return NextResponse.json({

      success: true,

      about,

    });

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