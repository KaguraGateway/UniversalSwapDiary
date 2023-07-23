FROM node:18-slim

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y build-essential openssl python3
# pnpmインストール
RUN npm install -g pnpm

# アプリケーションがリッスンするポートを開放
EXPOSE 3000
