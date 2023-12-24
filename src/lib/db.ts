import { createClient } from '@libsql/client';

export const db = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

export const replicatedDB = createClient({
  url: 'file:local.db',
  syncUrl: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

// await replicatedDB.sync();
