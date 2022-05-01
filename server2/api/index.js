const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()

const models = require('../models/')

// DB接続
/*
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
*/

// ルートパスにアクセスがあった時、'Hello World!'という文字列を返す
//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', async (req, res) => {
  //console.log('hoge')
  const rows = await models.User.findAll()
  res.json(rows)
})

app.post('/', async (req, res) => {
  //await console.log(req.body)
  //await console.log(req,res)
  const rows = await models.User.create(req.body)
  //console.log(rows)
})

export default app