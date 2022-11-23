import { SuperComponent, RelationsOptions } from '../common/src/index';
import { NavTypes } from './common/constants';
declare type NavOptions = {
    index: number;
    total: number;
    direction: boolean;
    paginationPosition: string;
};
export default class SwiperNav extends SuperComponent {
    externalClasses: string[];
    properties: {
        type: {
            type: StringConstructor;
            value: NavTypes;
        };
        minShowNum: {
            type: NumberConstructor;
            value: number;
        };
        hasNavBtn: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    relations: RelationsOptions;
    data: {
        index: number;
        total: number;
        direction: string;
        prefix: string;
        classPrefix: string;
    };
    ready(): void;
    onChange(opt: NavOptions): void;
    nav(e: any): void;
}
export {};
