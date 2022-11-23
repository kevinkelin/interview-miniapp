import { SizeEnum } from '../common/common';
export interface TdTagProps {
    closable?: {
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
        value?: ['t-class'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    maxWidth?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
    };
    variant?: {
        type: StringConstructor;
        value?: 'dark' | 'light' | 'outline' | 'light-outline';
    };
}
export interface TdCheckTagProps {
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultChecked?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    closable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    content?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
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
        value?: ['t-class'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
    };
    variant?: {
        type: StringConstructor;
        value?: 'dark' | 'light' | 'outline' | 'light-outline';
    };
}
