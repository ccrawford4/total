import { PrismaClient } from "@/generated/prisma"

// ======================================================================
// Prevent Prisma from being instantiated multiple times
function prismaClientSingleton() {
  return new PrismaClient()
}

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma
// ======================================================================
