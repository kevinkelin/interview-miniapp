import { SuperComponent, ControlInstance, RelationsOptions } from '../common/src/index';
interface SwitchOpt {
    cycle?: boolean;
    source: 'autoplay' | 'touch' | 'nav';
}
export default class Swiper extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSwiperProps;
    observers: {
        navigation(val: any): void;
        current(val: any): void;
        autoplay(val: any): void;
        interval(val: any): void;
        direction(val: any): void;
    };
    children: any;
    $nav: any;
    timer: any;
    updateTimer: any;
    control: ControlInstance;
    relations: RelationsOptions;
    data: {
        _current: number;
        _navigation: any;
        _width: number;
        _height: number;
        offsetX: number;
        offsetY: number;
        total: number;
        easings: {
            linear: string;
            easeInCubic: string;
            easeOutCubic: string;
            easeInOutCubic: string;
        };
        inited: boolean;
        currentInited: boolean;
        prefix: string;
        classPrefix: string;
    };
    attached(): void;
    detached(): void;
    ready(): void;
    methods: {
        init(): void;
    };
    initItem(): void;
    initNav(): void;
    inited(): void;
    initCurrent(): void;
    play(): void;
    replay(): void;
    pause(): void;
    goto(index: number, source: string): void;
    update(index: number, finish?: any): void;
    updateNav(index: any): void;
    calcOffset(index: number): {
        offsetX: number;
        offsetY?: undefined;
    } | {
        offsetY: number;
        offsetX?: undefined;
    };
    next(opt: SwitchOpt): void;
    prev(opt: SwitchOpt): void;
    onSwiperNavBtnChange(e: any): void;
}
export {};
