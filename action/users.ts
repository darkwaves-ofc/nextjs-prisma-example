"use server";

import prisma from "@/lib/prisma";

export async function createUser(name: string, email: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}