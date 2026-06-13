"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

export async function createMessage(formData: FormData) {
  const prisma = new PrismaClient();

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const body = String(formData.get("body") || "");

  await prisma.message.create({
    data: { name, email, body },
  });

  redirect("/messages");
}