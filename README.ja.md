# object-store

English README is here: [README.md](README.md)

Japanese README is here: [README.ja.md](README.ja.md)

Denoを使ったシンプルなオブジェクトストアAPI。

## 機能
- 各々の"オブジェクト"に対してJSONオブジェクトを個別のファイルに保存する
- ストアされたオブジェクトにアクセスおよび変更するためのGETとSETのAPIを提供する
- 悪用を防ぐためにアクセスログと利用制限を含む
- クライアントのブラックリストとホワイトリストをサポートする

## 要件
このプロジェクトは[Deno](https://deno.land/)を実行するために必要です。

## 使用方法
1. リポジトリをクローンします: `git clone https://github.com/code4fukui/object-store.git`
2. プロジェクトディレクトリに移動します: `cd object-store`
3. サーバーを起動します: `deno run --allow-net --allow-read --allow-write objectstore.js`

サーバーは `http://localhost:8000/api/` でリスニングを開始します。

## データ/API
プロジェクトはローカルファイルシステムを使ってJSONオブジェクトを保存しています。APIエンドポイントは以下の通りです。

- `GET /api/get/{filename}/{objectname}`: ファイル名とオブジェクト名によってストアされたオブジェクトを取得する
- `POST /api/set/{filename}/{objectname}`: 新しいオブジェクトを保存または既存のオブジェクトを更新する

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
