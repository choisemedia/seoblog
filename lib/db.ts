import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

export const db =
  connectionString
    ? new Pool({ connectionString, max: 10 })
    : null;

export async function healthcheckDb() {
  if (!db) {
    return { ok: false, reason: "DATABASE_URL is not configured" };
  }

  const client = await db.connect();
  try {
    await client.query("SELECT 1");
    return { ok: true };
  } finally {
    client.release();
  }
}
