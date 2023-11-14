const mysql = require('mysql2');
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "Event-Venue",
  connectionLimit:10
});

// const createUsersQuery = `CREATE TABLE IF NOT EXISTS users (
//   user_id INT AUTO_INCREMENT PRIMARY KEY,
//   role VARCHAR(10),
//   full_name VARCHAR(50),
//   email VARCHAR(100) UNIQUE,
//   password VARCHAR(255),
// )`;
// connection.promise().query(createUsersQuery)
//   .then(() => {
//     console.log(`users has been created `);
//     connection.release();
//   })
//   .catch((error) => {
//     console.error(`Error creating table "users":`, error);
//   });

//   const createVenuesQuery = `
//   CREATE TABLE IF NOT EXISTS venues (
//     venue_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100),
//     description VARCHAR(255),
//     capacity INT,
//     image VARCHAR(255),
//     address VARCHAR(255)
//   )
// `;

// connection.promise().query(createVenuesQuery)
//   .then(() => {
//     console.log(`venues has been created`);
//     connection.release();
//   })
//   .catch((error) => {
//     console.error(`Error creating table venues:`, error);
//   });

//   const createReservationQuery = `
//   CREATE TABLE IF NOT EXISTS reservation (
//     reservation_id INT,
//     FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE ON UPDATE CASCADE,
//     FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
//   )
// `;

// connection.promise().query(createReservationQuery)
//   .then(() => {
//     console.log(`reservation has been created`);
//     connection.release();
//   })
//   .catch((error) => {
//     console.error(`Error creating table reservation:`, error);
//   });

//   const createEventQuery= `
//   CREATE TABLE IF NOT EXISTS events (
//     event_id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR (255),
//     date DATE,
//     ticketPrice INT,
//     description VARCHAR(255),
//     venue_id INT,
//     FOREIGN KEY (venue_id) REFERENCES venues(venue_id) ON DELETE CASCADE ON UPDATE CASCADE
//   )
// `;

// connection.promise().query(createEventQuery)
//   .then(() => {
//     console.log(`events has been created`);
//     connection.release();
//   })
//   .catch((error) => {
//     console.error(`Error creating table events:`, error);
//   });



module.exports = connection;