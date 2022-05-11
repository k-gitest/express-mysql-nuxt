const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()
const jwt = require('jsonwebtoken')

const models = require('../models/')

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

//編集データ呼び出し・閲覧
app.get('/users/:id', async (req, res) => {
  console.log("server:"+req.params.id)
  const id = parseInt(req.params.id)
  const rows = await models.User.findAll({
    where:{
      id: id
    }
  })
  res.json(rows[0])
})

//更新
app.put('/users/:id', async (req, res) => {
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

//認証
app.post('/auth/login', async (req, res) => {
  console.log(req.body)
  const rows = await models.User.findAll({
    where: {email: req.body.email},
  })
  console.log(rows[0].name)
  if(rows[0].name === req.body.name){
    console.log('login')
  }
  //Tokenの発行　書き換え
  const payload = {
    id: rows[0].id,
    name: rows[0].name,
    email: rows[0].email,
  }
  //JWTのTokenを発行するには最低でもpayloadとsecretキー（秘密鍵）が必要
  const token = jwt.sign(payload, 'secret')
  return res.json({token})
})
//認証からtoken発行した後にアクセスされる処理
//Tokenの確認
app.get('/auth/user', (req, res) => {
  const headers = req.headers
  console.log(headers)
  const bearToken = req.headers["authorization"]
  const bearer = bearToken.split(" ") //bearとtokenを分離
  const token = bearer[1] //token部分を抜き出す
  //jwt.verifyでtokenの検証
  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      return res.json({
        user,
      })
    }
  })
})



export default app