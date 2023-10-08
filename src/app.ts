import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "Savio Anjos",
    email: "Savio@teste.com",
  },
});

export const app = fastify();
