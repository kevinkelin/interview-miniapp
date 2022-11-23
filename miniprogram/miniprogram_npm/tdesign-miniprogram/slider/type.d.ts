export interface TdSliderProps {
    colors?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabledColor?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor'];
    };
    label?: {
        type: null;
        value?: string | boolean;
    };
    marks?: {
        type: null;
        value?: Record<number, string> | Array<number>;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    min?: {
        type: NumberConstructor;
        value?: number;
    };
    range?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    showExtremeValue?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    step?: {
        type: NumberConstructor;
        value?: number;
    };
    value?: {
        type: null;
        value?: SliderValue;
    };
    defaultValue?: {
        type: null;
        value?: SliderValue;
    };
}
export declare type SliderValue = number | Array<number>;
