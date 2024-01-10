import { db } from './db';

export const getUser = async (userId: string) => {
  // Retrieve the user's details and points in the database
  try {
    const rs = await db.execute({
      sql: 'SELECT * FROM user_auth WHERE id = ?',
      args: [userId],
    });
    // console.log(rs.rows);
    return {
      user: rs.rows[0],
    };
  } catch (error) {
    console.error(error);
  }
};
export const getUserByEmail = async (email: string) => {
  // Retrieve the user's details and points in the database
  try {
    const rs = await db.execute({
      sql: 'SELECT * FROM user_auth WHERE email = ?',
      args: [email],
    });
    // console.log(rs.rows);
    return {
      user: rs.rows[0],
    };
  } catch (error) {
    console.error(error);
  }
};
