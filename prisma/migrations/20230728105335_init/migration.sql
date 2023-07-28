-- CreateTable
CREATE TABLE "UsdDraftDiaries" (
    "user_id" TEXT NOT NULL,
    "happy_percent" INTEGER NOT NULL DEFAULT 0,
    "main_content" TEXT,
    "good_news" TEXT,
    "bad_news" TEXT,
    "secret_talk" TEXT,
    "love_talk" TEXT,
    "best_title" TEXT,
    "best_first" TEXT,
    "best_second" TEXT,
    "best_third" TEXT,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UsdDraftDiaries_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UsdDiaries" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "happy_percent" INTEGER NOT NULL DEFAULT 0,
    "main_content" TEXT NOT NULL,
    "good_news" TEXT,
    "bad_news" TEXT,
    "secret_talk" TEXT,
    "love_talk" TEXT,
    "best_title" TEXT,
    "best_first" TEXT,
    "best_second" TEXT,
    "best_third" TEXT,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UsdDiaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsdReceiveDiaries" (
    "diary_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UsdReceiveDiaries_pkey" PRIMARY KEY ("diary_id")
);

-- CreateIndex
CREATE INDEX "UsdDiaries_user_id_posted_at_idx" ON "UsdDiaries"("user_id", "posted_at");

-- CreateIndex
CREATE INDEX "UsdReceiveDiaries_user_id_diary_id_idx" ON "UsdReceiveDiaries"("user_id", "diary_id");

-- AddForeignKey
ALTER TABLE "UsdReceiveDiaries" ADD CONSTRAINT "UsdReceiveDiaries_diary_id_fkey" FOREIGN KEY ("diary_id") REFERENCES "UsdDiaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
