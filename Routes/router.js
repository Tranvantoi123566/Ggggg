const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require( '../data/db.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', (req , res) => {
  
  res.render('a');
 
});

router.post('/dangky', (req , res) => {
  var username = req.body.username;
  var password = req.body.password;
  
  if (!username || !password) {
    res.status(400).send('Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password],(err) => {
    if (err) {
      console.error('Lỗi thêm người dùng: ' + err.message);
      res.status(500).send('Lỗi hệ thống!');
      return;
    }

    res.status(200).send('Đăng ký thành công!');
  });
  
});

router.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).send('Error');
    }
    res.json(results);
  });
});



router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Error');
    }
    res.json({ message: 'User deleted successfully' });
  });
});

module.exports = router;
  