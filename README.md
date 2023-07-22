# 無差別交換日記
無差別に交換日記を送信します。

# 起動方法
### クローン
```
git clone git@github.com:KaguraGateway/UniversalSwapDiary.git
```
### ビルド
```
docker compose build
```
### 起動
```
docker compose up
```

# その他コマンド
### Prisma Generate
Prismaの型ファイルを生成します。
```
docker compose run --rm web pnpm dlx prisma generate
```