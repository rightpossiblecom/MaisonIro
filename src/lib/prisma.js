import { isDemoMode } from "./demo-mode";
import {
  createTryon,
  deleteTryon,
  demoUser,
  getTryon,
  listTryons,
  updateTryon,
} from "./demo-store";

function createDemoPrisma() {
  return {
    user: {
      async findUnique({ where, select }) {
        const user = demoUser(where.id || where.email || "demo-user", where.email);
        if (!select) return user;
        const picked = {};
        for (const key of Object.keys(select)) {
          if (select[key]) picked[key] = user[key];
        }
        return picked;
      },
      async findFirst({ where }) {
        if (where?.customApiKey) {
          return demoUser(`key_${where.customApiKey.slice(-8)}`, where.email);
        }
        if (where?.email) return demoUser(`demo_${where.email}`, where.email);
        if (where?.OR) {
          const email = where.OR.find((clause) => clause.email)?.email;
          const key = where.OR.find((clause) => clause.customApiKey)?.customApiKey;
          if (email) return demoUser(`demo_${email}`, email);
          if (key) return demoUser(`key_${key.slice(-8)}`);
        }
        return null;
      },
      async create({ data }) {
        return demoUser(data.id || `demo_${data.email}`, data.email);
      },
      async update({ where, data }) {
        const user = demoUser(where.id, where.email);
        if (typeof data.credits === "number") user.credits = data.credits;
        if (data.credits?.increment) user.credits += data.credits.increment;
        if (data.credits?.decrement) user.credits -= data.credits.decrement;
        if (data.customApiKey !== undefined) user.customApiKey = data.customApiKey;
        if (data.name) user.name = data.name;
        return user;
      },
    },
    tryOn: {
      async create({ data }) {
        return createTryon(data);
      },
      async findFirst({ where }) {
        return getTryon(where.id, where.userId);
      },
      async findMany({ where }) {
        return listTryons(where?.userId);
      },
      async update({ where, data }) {
        return updateTryon(where.id, data);
      },
      async delete({ where }) {
        deleteTryon(where.id);
        return { id: where.id };
      },
    },
  };
}

function createLivePrisma() {
  const { PrismaClient } = require("@prisma/client");
  const { PrismaPg } = require("@prisma/adapter-pg");
  const { Pool } = require("pg");

  const globalForPrisma = globalThis;
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);

  const client =
    globalForPrisma.prisma ||
    new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
  return client;
}

export const prisma = isDemoMode() ? createDemoPrisma() : createLivePrisma();
