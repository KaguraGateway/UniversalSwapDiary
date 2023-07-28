import { NextRequest, NextResponse } from 'next/server';
import { Queue } from './Queue';

const diaryQueue = new Queue<{ user_id: String; id: number; data: any }>();

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { user_id, id } = res; // ユーザーIDとIDの取得

  // キューに日記のデータを追加
  diaryQueue.enqueue({ user_id, id, data: res });

  // キューにデータを追加したことをクライアントに返す
  return NextResponse.json({ message: 'データを受け取りました' }).ok;
}

export async function GET(request: NextRequest) {
  // デキューしてデータを取得
  const dequeuedData = diaryQueue.dequeue();

  if (dequeuedData) {
    // デキューしたデータをインキューしたユーザーに返す
    return NextResponse.json(dequeuedData.data).ok;
  } else {
    // データがない場合はエラーレスポンスを返す
    return NextResponse.json({ message: 'データがありません' });
  }
}