import db from "../database/db.js";

async function createUser(name, email, passwordHash) {
    const query = `INSERT INTO users (name,email,password_hash) VALUES ($1, $2, $3);`;
    const values = [name, email, passwordHash];
    const result = await db.query(query, values);
    return result.rows[0];
}

async function verifyEmail(email) {
    const query = `SELECT email FROM users WHERE email = $1`;
    const values = [email];
    const result = await db.query(query, values);
    return result.rows.length > 0;
}

async function verifyUser(email) {
    const query = `
        SELECT id,password_hash
        FROM users
        WHERE email = $1
    `;
    const values = [email];
    const result = await db.query(query, values);
    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
}

export { createUser, verifyEmail, verifyUser };