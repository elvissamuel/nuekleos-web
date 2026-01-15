import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { categorySchema } from "@/lib/models/validation-schema";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = categorySchema.parse(body);

    // Check if slug already exists
    const existingCategory = await prisma.category.findUnique({
      where: { slug: validatedData.slug }
    });

    if (existingCategory) {
      return NextResponse.json({ error: "Category with this slug already exists" }, { status: 400 });
    }

    const category = await prisma.category.create({
      data: {
        name: validatedData.name,
        slug: validatedData.slug
      }
    });

    return NextResponse.json({ data: category, message: "Category created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input data", details: error.message }, { status: 400 });
    }
    
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

