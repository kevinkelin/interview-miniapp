/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import type { SliderValue } from './type';
declare type dataType = {
    sliderStyles: string;
    classPrefix: string;
    initialLeft: number | null;
    initialRight: number | null;
    activeLeft: number;
    activeRight: number;
    maxRange: number;
    lineLeft: number;
    lineRight: number;
    dotTopValue: number[];
    blockSize: number;
    isScale: boolean;
    scaleArray: any[];
    scaleTextArray: any[];
    _value: SliderValue;
    prefix: string;
};
interface boundingClientRect {
    left: number;
    right: number;
}
export default class Slider extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdSliderProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: dataType;
    observers: {
        value(newValue: SliderValue): void;
        _value(newValue: SliderValue): void;
        marks(val: any): void;
    };
    attached(): void;
    triggerValue(value?: SliderValue): void;
    handlePropsChange(newValue: SliderValue): void;
    handleMask(marks: any): void;
    getSingleBarWidth(value: number): void;
    getSelectorQuery(id: string): Promise<boundingClientRect>;
    getInitialStyle(): Promise<void>;
    setDotStyle(left: number, right: number): void;
    stepValue(value: number): number;
    onSingleLineTap(e: WechatMiniprogram.TouchEvent): void;
    getSingleChangeValue(e: WechatMiniprogram.TouchEvent): number;
    convertPosToValue(posValue: number, dir: 0 | 1): number;
    onLineTap(e: WechatMiniprogram.TouchEvent): void;
    onTouchMoveLeft(e: WechatMiniprogram.TouchEvent): void;
    onTouchMoveRight(e: WechatMiniprogram.TouchEvent): void;
    setLineStyle(): void;
}
export {};
