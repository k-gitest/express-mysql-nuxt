import express from 'express'

const app = express()

// ルートパスにアクセスがあった時、'Hello World!'という文字列を返す
app.get('/', (req, res) => res.send('Hello World!'))

export default app