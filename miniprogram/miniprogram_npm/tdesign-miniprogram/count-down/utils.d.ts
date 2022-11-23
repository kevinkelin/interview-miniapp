export interface TimeData {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
export declare const parseTimeData: (time: number) => TimeData;
export declare const isSameSecond: (time1: number, time2: number) => boolean;
export declare type TTimeList = {
    digit: string;
    unit: string;
    match: string;
}[];
export declare const parseFormat: (time: number, format: string) => {
    timeText: string;
    timeList: TTimeList;
};
