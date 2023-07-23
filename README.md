# 無差別交換日記
無差別に交換日記を送信します。

# 起動方法
### 必須
- Node.js 18（ローカル環境下にも必要です）
- Docker Engine

### クローン
```
git clone git@github.com:KaguraGateway/UniversalSwapDiary.git
```
### ビルド
```
docker compose build
```
### 起動
Supabase（ローカル版）とNext.jsが起動します
```
./start.sh
```

# その他コマンド
### Prisma Generate
Prismaの型ファイルを生成します。
```
docker compose run --rm web pnpm dlx prisma generate
```