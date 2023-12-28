import { db, replicatedDB } from './db';

export const mytasks = [
  { id: 10011, title: 'created basic skeleton', completed: false },
  { id: 10012, title: 'added lucia with pnpm add lucia', completed: false },
  {
    id: 10013,
    title: 'added via pnpm add drizzle-orm postgres',
    completed: false,
  },
  {
    id: 10014,
    title:
      'added Lucia adapter for sqlite to try with Turso: pnpm add @lucia-auth/adapter-sqlite',
    completed: false,
  },
  {
    id: 10015,
    title:
      'added @linsql/client as per the docs for Turso on drizzle orm website',
    completed: false,
  },
  {
    id: 10016,
    title: 'Configured env.d.ts as per Lucia documentation for Astro',
    completed: false,
  },
  {
    id: 10017,
    title: 'Added the middleware file in src/middleware.ts',
    completed: false,
  },
  {
    id: 10018,
    title: 'Removed Turso and drizzle and postgres',
    completed: false,
  },
  { id: 10019, title: 'Added prisma via npm', completed: false },
  {
    id: 10020,
    title: 'Added vercel adapter with npx astro add vercel',
    completed: false,
  },
];

await replicatedDB.sync();
export const getTasks = async () => {
  const results = await replicatedDB.execute('SELECT * FROM tasks;');
  return {
    tasks: results.rows,
  };
};
