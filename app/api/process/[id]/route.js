import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request,
  { params }
) {

  try {

    const step =
      await prisma.processStep.findUnique({

        where: {

          id: Number(
            params.id
          ),

        },

      });

    return NextResponse.json(
      step
    );

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

export async function PUT(request, { params }) {

  try {

    const body = await request.json();

    const step =
      await prisma.processStep.update({

        where: {
          id: Number(params.id),
        },

        data: body,

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

export async function DELETE(
  request,
  { params }
) {

  try {

    await prisma.processStep.delete({

      where: {
        id: Number(params.id),
      },

    });

    return NextResponse.json({
      success: true,
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