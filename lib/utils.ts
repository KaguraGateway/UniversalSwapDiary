export class DiaryUtility {
    static getDayOfWeek(date: string) {
        const day = new Date(date).getDay();
        const days = ['日', '月', '火', '水', '木', '金', '土'];

        return days[day];
    };
}