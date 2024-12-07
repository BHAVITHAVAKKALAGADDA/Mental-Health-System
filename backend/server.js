const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Test Database Connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database!');
  }
});

// Sample Route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// API to Fetch Users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// API to Handle Signup
app.post('/signup', (req, res) => {
  const {
    name,
    email,
    phone,
    dob,
    gender,
    password,
    emergencyName,
    emergencyPhone,
  } = req.body;

  const sql =
    'INSERT INTO users (name, email, phone, dob, gender, password, emergency_contact_name, emergency_contact_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sql,
    [name, email, phone, dob, gender, password, emergencyName, emergencyPhone],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error occurred during signup.');
      }
      res.status(200).send('User signed up successfully!');
    }
  );
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
