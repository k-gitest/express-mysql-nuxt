## 目的
nuxt.jsとexpressを使用してCMSを構築する技術選定における検証である。

## app概要
フロントはcreate-nuxt-appで構築されたNuxt.jsを使用し、バックエンドにexpressを利用したCMSプロジェクトです。

* DBはmysql、ORマッパーにはsequelizeを使用しnuxtとexpressの動作を検証する。

## 開発環境

* nuxt 2.15.8
* express 4.17.3
* sequelize 6.19.0
* mysql2 2.3.3
* vuetify 2.6.1

## ディレクトリ構成

<pre>
myapp...プロジェクトルート
  ├── assets ...css設定
  ├── components ...呼び出し用コンポーネントファイル
  │     ├── FormParts ...フォーム用コンポーネント
  │     ├── Private ...ログインユーザー向けコンポーネント
  │     ├── Layout ...メインレイアウト
  │     └── provider ...ユーザー認証チェック
  ├── layouts ...レイアウト設定
  ├── pages ...nuxtドキュメントルート
  │     ├── api ...サーバー側処理
  │     ├── login ...ログイン画面
  │     ├── signup ...登録画面
  │     └── user ...会員向け画面
  │           └── profile ...会員情報画面
  ├── server ...express／sequelizeテスト／ejs用api
  ├── server2 ...express設定／sequeize設定/nuxt用api
  │     ├── api ...nuxt用api設定／JWT検証
  │     ├── bin ...express用webサーバー設定
  │     ├── config ...DBパス設定
  │     ├── migrations ...sequeize用DBマイグレ設定
  │     ├── models ...sequeize用DBモデル設定
  │     ├── seeders ...sequeize用DBテストシーダー設定
  │     └── app.js ...express設定
  ├── static ...画像ファイル
  └── store ...Vuex設定
</pre>

* 今回serverはexpressとsequelizeの動作テストのみ使用しておりnuxtとは連動していない。
* nuxtからのCRUD処理やJWTトークン検証はserver2/apiで行う

## 注意点

nuxtとexpressの連携はnuxt.configで行う為、まずnuxtをインストールしてからexpressをインストールした方が良い。package.jsonはそちらを使用する。
ミドルウェア設定でパスアドレスを設定し、バックエンドとの接続はaxiosを使用している。
nuxt.configでは他にauth認証の設定も行っており、認証後の遷移などもここで指定する。

## 結論

expressをバックエンドとした場合、railsやlaravelと比較してnuxtと同じjsであるため今回は必要最低限の構成であるが、比較的実装は簡単だと思われる。rubyやphpを覚える必要はない。ただ少々原始的な書き方ではある。

nextと異なりフロントとバックエンドのディレクトリが分離できるので作業もしやすいと思われる。接続も殆どnuxt.configで設定するので問題が起こりにくいと考えられる。

expressを更に速度特化にしたfastifyも技術選定として加える事ができると思われる。

nuxtに関してはver3でnitro(h3)を標準搭載しており、expressを使用する場面が少ない可能性があるが、接続方法もnuxt.configから設定できるため好みの問題といえる。

[nuxt3の検証はコチラ](https://github.com/k-gitest/nuxt3-form-components)