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

//一覧表示
app.get('/', async (req, res) => {
  //console.log('hoge')
  const rows = await models.User.findAll()
  res.json(rows)
})

//新規登録
app.post('/', async (req, res) => {
  //await console.log(res)
  //await console.log(req.body)
  //await console.log(req,res)
  const rows = await models.User.create(req.body)
  res.send(true)
  //console.log(rows)
})

//閲覧
app.get('/:id', async (req, res) => {
  models.User.findAll({
    where:{
      id: req.body.id
    }
  })
  res.send(true)
})

//編集
app.put('/', async (req, res) => {
  models.User.update(req.body, {
    where:{id: req.body.id},
  })
  console.log(true)
})

//削除
app.delete('/', async (req, res) => {
  //console.log(req.body.id)
  await models.User.destroy({
    where: {id: req.body.id},
  })
  res.send(true)
})





export default app