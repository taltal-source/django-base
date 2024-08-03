FROM nginx:1.21-alpine

# ローカルのdefault.confをコンテナにコピー
COPY containers/web/default.conf /etc/nginx/conf.d/default.conf

# ローカルのnginx.confをコンテナにコピー
COPY containers/web/nginx.conf /etc/nginx/nginx.conf
