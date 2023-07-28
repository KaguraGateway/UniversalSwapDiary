export type Diary = {
    happy_percent: number;
    main_content: string;
    good_news: string;
    bad_news: string;
    secret_talk: string;
    love_talk: string;
    best_title: string;
    best_first: string;
    best_second: string;
    best_third: string;
    user_name: string | undefined;
    user_id: string;
    posted_at: string;
}

export const diaryWhiteParams = [
    "happy_percent",
    "main_content",
    "good_news",
    "bad_news",
    "secret_talk",
    "love_talk",
    "best_title",
    "best_first",
    "best_second",
    "best_third",
    "is_anonymous"
] as const;
export type diaryWhiteParams = typeof diaryWhiteParams[number];

export function getDiaryParams(params: any) {
    let diaryParams: any = {};
    diaryWhiteParams.forEach((key) => {
        diaryParams[key] = params[key];
    });
    return diaryParams;
}