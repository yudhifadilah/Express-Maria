const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Tambahkan port di sini
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Cek koneksi dengan menjalankan query sederhana
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful.');
    connection.release(); // Hapus koneksi setelah digunakan
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();

module.exports = pool;
