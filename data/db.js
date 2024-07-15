const mysql = require('mysql');


const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12719572', 
  password: 'vRMXCSE1YX', 
  database: 'sql12719572' 
});

// Kết nối tới MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});



module.exports = db