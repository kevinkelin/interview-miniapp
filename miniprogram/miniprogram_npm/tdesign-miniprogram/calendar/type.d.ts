import { ButtonProps } from '../button/index';
export interface TdCalendarProps {
    confirmBtn?: {
        type: null;
        value?: string | ButtonProps | null;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    firstDayOfWeek?: {
        type: NumberConstructor;
        value?: number;
    };
    format?: {
        type: undefined;
        value?: (day: TDate) => TDate;
    };
    maxDate?: {
        type: NumberConstructor;
        value?: number | Date;
    };
    minDate?: {
        type: NumberConstructor;
        value?: number | Date;
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    type?: {
        type: StringConstructor;
        value?: 'single' | 'multiple' | 'range';
    };
    value?: {
        type: null;
        value?: number | Date | TCalendarValue[];
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type TDateType = 'selected' | 'disabled' | 'start' | 'centre' | 'end' | '';
export interface TDate {
    date: Date;
    day: number;
    type: TDateType;
    className?: string;
    prefix?: string;
    suffix?: string;
}
export declare type TCalendarValue = number | Date;
