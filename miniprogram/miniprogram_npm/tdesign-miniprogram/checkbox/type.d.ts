export interface TdCheckboxProps {
    align?: {
        type: StringConstructor;
        value?: 'left' | 'right';
    };
    checkAll?: {
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
    color?: {
        type: StringConstructor;
        value?: string;
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
        value?: ['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border'];
    };
    icon?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    indeterminate?: {
        type: BooleanConstructor;
        value?: boolean;
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
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: string | number;
    };
}
export interface TdCheckboxGroupProps {
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    name?: {
        type: StringConstructor;
        value?: string;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<CheckboxOption>;
    };
    value?: {
        type: ArrayConstructor;
        value?: CheckboxGroupValue;
    };
    defaultValue?: {
        type: ArrayConstructor;
        value?: CheckboxGroupValue;
    };
}
export declare type CheckboxOption = string | number | CheckboxOptionObj;
export interface CheckboxOptionObj {
    label?: string;
    value?: string | number;
    disabled?: boolean;
    checkAll?: true;
}
export declare type CheckboxGroupValue = Array<string | number>;
