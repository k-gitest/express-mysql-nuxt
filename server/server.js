const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()
const port = 3000

// DB接続
const sequelize = new Sequelize(
  'mydb', //DB名
  'root', //ユーザー名
  null, //パスワード
  {
    host: 'localhost', //ホスト名
    dialect: 'mysql', //DB製品名
    // logging: false
  }
)

// モデル作成
// defineメソッドでモデル構造定義
const User = sequelize.define('User', // Userテーブル
{
  //カラム定義
  name: {
    type: DataTypes.STRING,  // 文字列型
    allowNull: false         // falseはNULLでエラー
    //defaultValue：デフォルト値
    //comment：コメント
  },
  age: {
    type: DataTypes.INTEGER  // 整数型
  },
  email: {
    type: DataTypes.STRING,
  }
  /*
  key: {
    type: DataTypes.INTEGER, //
    primaryKey: true,         // PRIMARY KEY
    autoIncrement: true,      // AUTO_INCREMENT
    comment: '主キー'          // COMMENT
  },
  data1: {
    type: DataTypes.STRING(32),
    unique: true,             // UNIQUE
  },
  flag1: {
    type: DataTypes.BOOLEAN,
    allowNull: false,         // NOT NULL
    defaultValue: true        // DEFAULT
  },
  */
  /*
  bar_id:{
    type: DataTypes.INTEGER,
  
    // 外部キー
    // 実際生成されるSQLは FOREIGN KEY (`bar_id`) REFERENCES `Bars` (`id`)
    references: {
      model: Bar,
      key: 'id'
    }
  }
  */
  /*ユニークid生成
  uniq_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4  // もしくは Sequelize.UUIDV1
  }
  */
},{
  //テーブル全体の定義
  // MySQL上のテーブル名を複数形にしない（デフォルトはfalse）
  freezeTableName: true,
  // タイムスタンプ機能を利用する（デフォルトはtrue）
  // falseにするとcreatedAt, updatedAtのカラムが作成されません
  timestamps: false,
  // タイムスタンプ機能を一部調整（デフォルトはtrue）
  createdAt: false,         // レコード生成時の時間を記録
  updatedAt: false,         // レコード更新時の時間を記録
  // Booleanではなく文字列を指定するとMySQL上のカラム名を変更できます
  // createdAt: 'created_at',
  // updatedAt: 'updated_at'
})

//DB作成
!(async()=>{ //エラーの場合はtsconfig.jsonのcompilerOptionsのtargetをes6へ
  // MySQL上にテーブルを作成
  await User.sync({alter: true})

  // 既存のデータを削除(TRUNCATE)
  await User.destroy({
    truncate: true
  })

  // Userテーブルへデータを挿入
  const user = await User.bulkCreate([
    {name:'Honda',    age:18},
    {name:'Yamaha',   age:16},
    {name:'Suzuki',   age:20},
    {name:'Kawasaki', age:24}
  ])

  // 'Suzuki'のageを21に更新
  await User.update({ age: 21 }, {
    where: {
      name: 'Suzuki'
    }
  })

  // 'Yamaha'を削除
  await User.destroy({
    where: {
      name: 'Yamaha'
    }
  })

  // Userテーブルの全レコードを取得
  const rows = await User.findAll();
  rows.forEach(row => {
    const id = row.id
    const name = row.name
    const age  = row.age

    console.log(`${id}: ${name} ${age}`)
  })

  // MySQLから切断
  //await sequelize.close()

})()

app.use('/', express.static('server'))
app.use(express.urlencoded({extended: true}))

app.route('/')
  .get((req, res) => {
  	res.sendFile(__dirname + '/form.html')
  })
  .post(async(req, res) => {
    //await sequelize.sync()
    //await User.sync()
    //createで単一レコード登録
    //await User.create(req.body)
    //bulkCreateは複数レコードを登録
    const user = await User.bulkCreate([
      req.body
    ])
    
  	console.log(req.body)
    res.redirect('/')
  })
// webサーバー起動
app.listen(port, () => console.log(`Example app listening on port ${port}!`))









