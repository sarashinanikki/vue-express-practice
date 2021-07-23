# サンプルアプリ

これは友人に渡すためのものです。

## 使い方

`docker compose up`をする前にするべきことが二つあります。

1. ./dbの作成
2. .envファイルの作成

.gitignoreで消している、必要なファイル群を自分で作ってからビルドしてください。

dbについては`mkdir ./db/`とコマンドを打てばOKです。

.envファイルについては`touch .env`してください。内容はDMで共有します。

以上のことが終わったら`docker compose up -d`とかして、localhost:8080に接続するとfrontendの画面につながります。

## DB接続について

[これ](https://expressjs.com/ja/guide/database-integration.html#postgresql)を参考にpg-promiseを使っています。接続文字列は書いといたけど繋がるかはテスト出来てないです。何かあったら言ってください。

## frontとbackの接続について

`front/vue.config.js`にプロキシ作っときました。`/api`から始まるURLを指定すると、自動的にbackendの方に転送されます。基本的にbackendのURLは`/api/hoge`という風にすると良いでしょう。

localhost:8080に接続したとき`Hello! API connection is correct!`と出ていますが、これはbackendから受け取った値です。

## コンテナ内への接続について

それぞれ`login-back.sh`, `login-front.sh`, `login-db.sh`を作っておきました。叩けばコンテナ内に入れます。  
入れたいライブラリがある時は、コンテナ内に入って`npm install hoge`なりしてください。

あとついでに`docker-start.sh`も作っておきました。叩くとコンテナが立ち上がります。それだけです。
