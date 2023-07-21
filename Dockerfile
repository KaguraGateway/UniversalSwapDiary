FROM node:18-slim

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# pnpmインストール
RUN npm install -g pnpm

# アプリケーションがリッスンするポートを開放
EXPOSE 3000
