// Import the PostgreSQL client library
const { Client } = require("pg");

// Load environment variables from a .env file if needed
require("dotenv").config();

// Define PostgreSQL connection configuration
const pgClient = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Function to test PostgreSQL connection
async function testPostgresConnection() {
  try {
    // Connect to PostgreSQL
    await pgClient.connect();
    console.log("Connected to PostgreSQL");
    
    // Perform any database operations here if needed
    
    // Disconnect from PostgreSQL
    await pgClient.end();
    console.log("Disconnected from PostgreSQL");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
}

// Call the function to test the connection
testPostgresConnection();
