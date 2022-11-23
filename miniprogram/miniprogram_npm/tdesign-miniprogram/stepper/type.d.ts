export interface TdStepperProps {
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    disableInput?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-input', 't-class-add', 't-class-minus'];
    };
    inputWidth?: {
        type: NumberConstructor;
        value?: number;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    min?: {
        type: NumberConstructor;
        value?: number;
    };
    step?: {
        type: NumberConstructor;
        value?: number;
    };
    theme?: {
        type: StringConstructor;
        value?: 'normal' | 'grey';
    };
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    defaultValue?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
}
