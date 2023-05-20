import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

globalThis.prisma = process.env.NODE_ENV !== 'production' ? client : undefined

export default client