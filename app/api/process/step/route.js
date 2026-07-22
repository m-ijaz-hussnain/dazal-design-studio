import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {

  try {

    const body = await request.json();

    const process =
      await prisma.processSection.findFirst();

    if (!process) {

      return NextResponse.json(
        {
          message:
            "Please create process section first.",
        },
        {
          status: 400,
        }
      );
    }

    const step =
      await prisma.processStep.create({

        data: {

          title: body.title,

          description:
            body.description,

          image: body.image,

          processId: process.id,

        },

      });

    return NextResponse.json(step);

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