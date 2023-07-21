FROM node:18-slim

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl
# pnpmインストール
RUN npm install -g pnpm

# アプリケーションがリッスンするポートを開放
EXPOSE 3000
