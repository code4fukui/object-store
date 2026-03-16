# object-store
[README.ja.md](README.ja.md)に日本語のREADMEがあります。

Deno を使用した簡単なオブジェクトストア API です。

## 機能
- それぞれの "オブジェクト" ごとに JSON オブジェクトをファイルに保存します
- 保存されたオブジェクトにアクセスしたり修正したりするための GET および SET API を提供します
- 悪用を防ぐためのアクセスログと速度制限を含んでいます
- クライアントのブラックリストとホワイトリストをサポートしています

## 要件
このプロジェクトを実行するには[Deno](https://deno.land/)が必要です。

## 使用方法
1. リポジトリをクローンします: `git clone https://github.com/code4fukui/object-store.git`
2. プロジェクトディレクトリに移動します: `cd object-store`
3. サーバーを起動します: `deno run --allow-net --allow-read --allow-write objectstore.js`

サーバーは `http://localhost:8000/api/` でリッスンを開始します。

## データ/API
このプロジェクトはローカルファイルシステムを使ってJSONオブジェクトを保存します。APIエンドポイントは以下のとおりです:

- `GET /api/get/{filename}/{objectname}`: ファイル名とオブジェクト名で保存されたオブジェクトを取得する
- `POST /api/set/{filename}/{objectname}`: 新しいオブジェクトを保存するか、既存のオブジェクトを更新する

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
