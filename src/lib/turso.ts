import { createClient } from "@libsql/client";

export const turso = createClient({
  url: "libsql://lister-parent-db-chrislopes.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN,
});