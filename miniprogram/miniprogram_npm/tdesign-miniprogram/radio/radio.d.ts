import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Radio extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    parent: any;
    relations: RelationsOptions;
    options: {
        multipleSlots: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    properties: {
        borderless: {
            type: BooleanConstructor;
            value: boolean;
        };
        align?: {
            type: StringConstructor;
            value?: "left" | "right";
        };
        allowUncheck?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        checked?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        defaultChecked?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        content?: {
            type: StringConstructor;
            value?: string;
        };
        contentDisabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        customStyle?: {
            type: StringConstructor;
            value?: string;
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        externalClasses?: {
            type: ArrayConstructor;
            value?: ["t-class", "t-class-icon", "t-class-label", "t-class-content", "t-class-border"];
        };
        icon?: {
            type: null;
            value?: string[] | "fill-circle" | "stroke-line";
        };
        label?: {
            type: StringConstructor;
            value?: string;
        };
        maxContentRow?: {
            type: NumberConstructor;
            value?: number;
        };
        maxLabelRow?: {
            type: NumberConstructor;
            value?: number;
        };
        name?: {
            type: StringConstructor;
            value?: string;
        };
        value?: {
            type: null;
            value?: import("./type").RadioValue;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        checked(isChecked: Boolean): void;
    };
    data: {
        prefix: string;
        active: boolean;
        classPrefix: string;
        customIcon: boolean;
        optionLinked: boolean;
        iconVal: any[];
    };
    methods: {
        handleTap(e: any): void;
        doChange(): void;
        initStatus(): void;
        setDisabled(disabled: Boolean): void;
    };
}
