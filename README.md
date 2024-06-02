## Django Base Project

### 起動
1. envを作成(項目は.env.exampleと同じ)
2. `$ docker compose up`
3. localhost:80にアクセス

### 構成
3コンテナ構成。containers/ 下のDockerfile2つとpostgres(composeで指定)の3コンテナ。
アクセスはnginxのコンテナに行い、静的ファイルはそのまま配信、そうでないものはapサーバーに転送する。