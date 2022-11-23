/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import { TdCalendarProps } from './type';
export interface CalendarProps extends TdCalendarProps {
}
export default class Calendar extends SuperComponent {
    externalClasses: string[];
    options: WechatMiniprogram.Component.ComponentOptions;
    properties: TdCalendarProps;
    data: {
        prefix: string;
        classPrefix: string;
        months: any[];
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        calcMonths(): void;
        handleClose(): void;
        handleSelect(e: any): void;
        onTplButtonTap(): void;
    };
}
