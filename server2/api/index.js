const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()

const models = require('../models/')

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

// ルートパスにアクセスがあった時、'Hello World!'という文字列を返す
//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', async (req, res) => {
  const rows = await models.User.findAll()
  res.json(rows)
})

//app.post('/', (req, res) => res.)

export default app