FROM node:18-alpine

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 依存関係の定義ファイルをアプリケーションディレクトリにコピー
COPY package.json pnpm-lock.yaml ./

# pnpmインストール
RUN npm install -g pnpm

# アプリケーションの依存関係をインストール
RUN pnpm install --frozen-lockfile --prod

# アプリケーションのソースをアプリケーションディレクトリにコピー
COPY . .

# アプリケーションがリッスンするポートを開放
EXPOSE 3000

# アプリケーションを実行するコマンド
CMD [ "pnpm", "dev" ]