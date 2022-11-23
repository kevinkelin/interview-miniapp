export interface TdCollapseProps {
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    defaultExpandAll?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    expandIcon?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    expandMutex?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'card';
    };
    value?: {
        type: ArrayConstructor;
        value?: CollapseValue;
    };
    defaultValue?: {
        type: ArrayConstructor;
        value?: CollapseValue;
    };
}
export interface TdCollapsePanelProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    expandIcon?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-header', 't-class-content'];
    };
    header?: {
        type: StringConstructor;
        value?: string;
    };
    headerRightContent?: {
        type: StringConstructor;
        value?: string;
    };
    value?: {
        type: null;
        value?: string | number;
    };
}
export declare type CollapseValue = Array<string | number>;
