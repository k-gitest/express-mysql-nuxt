const express = require('express')
const app = express()
const port = 8000
const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb' //db作成後に追加
})

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
  
  const sql = "select * from users"
  	con.query(sql, function (err, result, fields) {  
  	if (err) throw err;  
  	console.log(result)
  	console.log(result[0].email)
	});
	
  /* DBを作成する場合
  con.query('CREATE DATABASE mydb', function (err, result) {
  if (err) throw err; 
    console.log('database created');
  });
  */
  /* テーブルの作成
  const sql = 'CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)';
	con.query(sql, function (err, result) { 
		if (err) throw err;
	  console.log('table created')
	});
  */
  /* データ取得
  const sql = "select * from users"
	con.query(sql, function (err, result, fields) {  
	if (err) throw err;  
	console.log(result)
	});
  */
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
