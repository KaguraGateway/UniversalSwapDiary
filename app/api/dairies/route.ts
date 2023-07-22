import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    let reqJson = request.json();
    //ここでPrisma.findUniqueかな？
    return NextResponse.json(reqJson);
}
export async function POST(request: Request) {
    let reqJson = request.json();
    //ここでPrisma.createかな？
    return NextResponse.json(reqJson);
}