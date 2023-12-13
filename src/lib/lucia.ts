import { lucia } from 'lucia';
// import { PrismaClient } from '@prisma/client';
import { astro } from 'lucia/middleware';
import { createClient } from '@libsql/client';
import { libsql } from '@lucia-auth/adapter-sqlite';

// const client = new PrismaClient();

const tursodb = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

export const auth = lucia({
  env: import.meta.env.DEV ? 'DEV' : 'PROD',
  middleware: astro(),
  adapter: libsql(tursodb, {
    user: 'user_auth',
    session: 'user_session',
    key: 'user_key',
  }),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
      emailVerified: Boolean(data.email_verified),
    };
  },
});

export type Auth = typeof auth;
