## Django Base Project

## 本番環境
### 起動
1. envを作成(項目は.env.exampleと同じ、DEBUGはFalseにする。)
2. `docker compose up`
3. 80番ポートにアクセス

### 構成
docker-compose.ymlで定義。
3コンテナ構成。containers下のDockerfile2つとpostgres(composeで指定)の3コンテナ。
アクセスはnginxのコンテナに行い、静的ファイルはそのまま配信、そうでないものはapサーバーに転送する。
構成の詳細については後述。

## 開発環境(devcontainer)
### 起動
1. envを作成(項目は.env.exampleと同じ、DEBUGはTrueにする。)
2. VSCodeにdevcontainerをインストール
3. 左下のマークまたは Ctrl + Shift + Pで表示されるダイアログからReopen in Containerを選択
4. 起動後bashを開き、以下のコマンドでそれぞれ確認可能(ただし、マイグレーション等されていないため、必要に応じてentrypoint.shなどの内容を実行しておく)
    - 開発環境で起動は `python manage.py runserver`で8000番ポートにアクセス。
    - 本番環境と同じ環境で起動は `gunicorn config.wsgi:application --bind 0.0.0.0:8000`で80番ポートにアクセス
    - pgadminはlocalhost:8080で既に稼働中(ログイン情報はsettings.pyなどを参照。)

### 構成
docker-compose.dev.ymlで定義。
4コンテナ構成。本番環境と違うのはpgadminが実行されている点やrootユーザーを使用している部分など一部最適化されていない点。

## コンテナ構成
### container/app
- Dockerfile
本番環境用アプリケーションコンテナ。
マルチステージビルドやユーザー変更している。

- Dockerfile.development
開発環境用アプリケーションコンテナ。
構成がわかりやすいようシンプルにしてある。
composeで自動実行が指定されておらず、実行用コマンドが存在しないため代わりにコンテナをスリープさせないためのコマンドを実行している。
開発環境時は都度コマンド操作で起動・停止のコントロールが必要。

### container/db
初期設定用のSQLを記載するとビルド時に自動実行される。
他にも.sqlで終わるファイルはすべて読み込まれる。
また、helthcheckとしてpsqlのコマンド監視が組み込まれており、正常にhelthcheckが終わらない場合、アプリケーションサーバーは起動しない設定。

### container/web
ここに記載のコンフィグを使ってnginxの軽量イメージでビルドされる。
80番で受けてstaticファイルなどの配信はnginxで処理し、アプリケーションへのリクエストはアプリケーションサーバーに任せるようになっている。

### composeにのみ記載
- pgadmin4 
開発環境用の確認用にdevcontainer内でのみ起動。8080番ポート。
起動後はserver内にregistryから判別用の名前と接続情報(Djangoのsettingsファイル参照)を入力するとGUIでDBを確認可能。
