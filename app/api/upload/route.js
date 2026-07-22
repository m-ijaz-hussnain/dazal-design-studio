import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {

  try {

    const formData =
      await request.formData();

    const file =
      formData.get("image");

    const type =
      formData.get("type");

    if (!file) {

      return NextResponse.json(
        {
          message:
            "Image is required.",
        },
        {
          status: 400,
        }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const base64 = `data:${file.type};base64,${buffer.toString(
      "base64"
    )}`;

    const result =
      await cloudinary.uploader.upload(
        base64,
        {
          folder:
            "krafty/projects",
        }
      );

    return NextResponse.json({

      image: {

        url: result.secure_url,

        publicId:
          result.public_id,

        type,

      },

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        message:
          "Upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}