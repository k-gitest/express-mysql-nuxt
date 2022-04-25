const express = require('express')
// 送信されたdataを処理するためには、body-parserモジュールを使用する
//const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mysql = require('mysql2')
//const csp = require('express-csp-header')

// db接続用
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb' //db作成後に追加
})

// db接続
con.connect(function(err) {
  if (err) throw err;
  console.log('DB Connected');
	
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
	console.log(result[0].email)
	});
  */
  /* データ挿入
  const sql = "INSERT INTO users(name,email) VALUES('kevin','kevin@test.com')"
  con.query(sql,function(err, result, fields){
  	if (err) throw err;
  	console.log(result)
  })
  
  // データ挿入2
  const sql = "INSERT INTO users(name,email) VALUES(?,?)"
  con.query(sql,['Jack','jack@exsample.co.jp'],function(err, result, fields){
  	if (err) throw err;
  	console.log(result)
  })
  
  // データ挿入3
  const sql = "INSERT INTO users SET ?"
  con.query(sql,{name:'Tommy',email:'tommy@test.co.jp'},function(err, result, fields){
  	if (err) throw err;
  	console.log(result)
  });
  */
});

app.use('/', express.static('server'));
// body-parserをミドルウェアとして設定
//app.use(bodyParser.urlencoded({extended: true}))
//express4.16以降はbody-parserがいらない
app.use(express.urlencoded({extended: true}));

app.route('/')
  .get((req, res) => {
  	res.sendFile(__dirname + '/form.html')
  })
  //登録処理
  .post((req, res) => {
    //res.send(req.body)
    const sql = "INSERT INTO users SET ?"
  	con.query(sql,req.body,function(err, result, fields){
  		if (err) throw err;
  		console.log(result);
  		//res.send('登録が完了しました');
      res.redirect('/') //送信後のページ遷移
  	});
  })

/*
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/form.html')
})
*/

//更新処理
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', './')
app.get('/edit/:id',(req,res)=>{
	const sql = "SELECT * FROM users WHERE id = ?";
	con.query(sql,[req.params.id],function (err, result, fields) {  
		if (err) throw err;
		res.render('edit',{user : result})
		});
})

app.post('/update/:id',(req,res)=>{
	const sql = "UPDATE users SET ? WHERE id = " + req.params.id;
	con.query(sql,req.body,function (err, result, fields) {  
		if (err) throw err;
		console.log(result);
		res.redirect('/');
		});
})

//削除処理
app.post('/delete/:id',(req,res)=>{
	const sql = "DELETE FROM users WHERE id = ?";
	con.query(sql,[req.params.id],function(err,result,fields){
		if (err) throw err;
		console.log(result)
		res.redirect('/');
	})
});

// apiサーバ設定
app.get("/api", function(req, res, next) {
  const sql = "select * from users"
	con.query(sql, function (err, result, fields) {  
	if (err) throw err;
	// CORS対応
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token',
    'Content-Type, application/json; charset=utf-8'
  );
  
  // データの返却
  res.json(result);
	});
});

// 送信データをDBへ挿入
/*
app.post('/', (req, res) => {
  //res.send(req.body)
  const sql = "INSERT INTO users SET ?"
	con.query(sql,req.body,function(err, result, fields){
		if (err) throw err;
		console.log(result);
		//res.send('登録が完了しました');
    res.redirect('/') //送信後のページ遷移
	});
})
*/

/*
app.get('/', (request, response) => {
	const sql = "select * from users"
	con.query(sql, function (err, result, fields) {  
	if (err) throw err;
	//レスポンスデータを表示
	//response.send('Hello World!')
	response.send(result)
	});
});
*/
// webサーバー接続
// コンソールに接続を表示
app.listen(port, () => console.log(`Example app listening on port ${port}!`))








