import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
  return await prisma.genero.findMany({
    orderBy: { id: "asc" },
    include: { filmes: true },
  });
};

export const encontreUm = async (id) => {
  return await prisma.genero.findUnique({
    where: { id: Number(id) },
    include: { filmes: true },
  });
};

export const criar = async (dado) => {
  return await prisma.genero.create({
    data: {
      nome: dado.nome,
    },
  });
};

export const deletar = async (id) => {
  return await prisma.genero.delete({
    where: { id: Number(id) },
  });
};

export const atualizar = async (id, dado) => {
  return await prisma.genero.update({
    where: { id: Number(id) },
    data: {
      ...(dado.nome && { nome: dado.nome }),
    },
  });
};
