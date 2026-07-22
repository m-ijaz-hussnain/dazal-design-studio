import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const process = await prisma.processSection.findFirst({
      include: {
        steps: true,
      },
    });

    return NextResponse.json(process);

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
      title,
      description,
    } = body;

    const existingProcess =
      await prisma.processSection.findFirst();

    let process;

    if (existingProcess) {

      process =
        await prisma.processSection.update({

          where: {
            id: existingProcess.id,
          },

          data: {
            title,
            description,
          },

        });

    } else {

      process =
        await prisma.processSection.create({

          data: {
            title,
            description,
          },

        });

    }

    return NextResponse.json(process);

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