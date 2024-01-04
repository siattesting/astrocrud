import { replicatedDB } from './db';

await replicatedDB.sync();

export async function fetchTasks() {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT id, title, completed, created_at FROM tasks ORDER BY id ASC',
      args: [],
    });

    const tasks = data.rows;
    return tasks;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all tasks.');
  }
}

export async function fetchCompletedTasks() {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT id, title, completed, created_at FROM Tasks WHERE completed = ? ORDER BY title ASC',
      args: [1],
    });

    const tasks = data.rows;
    return tasks;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch completed tasks.');
  }
}
export async function fetchPendingTasks() {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT id, title, completed, created_at FROM Tasks WHERE completed = ? ORDER BY title ASC',
      args: [0],
    });

    const tasks = data.rows;
    return tasks;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch pending tasks.');
  }
}

export async function fetchFilteredtasks(query: string) {
  try {
    const data = await replicatedDB.execute({
      sql: 'SELECT id, title, completed, created_at FROM Tasks WHERE title ILIKE ? ORDER BY title ASC',
      args: [query],
    });

    const tasks = data.rows;
    return tasks;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch selected tasks.');
  }
}
