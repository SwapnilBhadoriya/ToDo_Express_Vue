const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    process.env.URL,
});


const connectDb = async ()=>{
    try {
        await pool.connect();
        console.log('Successfully connected to database...');
    } catch (error) {
        console.log('Error in connecting with the database..');
    }
}


module.exports = {pool,connectDb};