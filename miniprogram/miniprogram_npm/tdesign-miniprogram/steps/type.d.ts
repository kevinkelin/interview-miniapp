export interface TdStepsProps {
    current?: {
        type: null;
        value?: string | number;
    };
    defaultCurrent?: {
        type: null;
        value?: string | number;
    };
    currentStatus?: {
        type: StringConstructor;
        value?: 'default' | 'process' | 'finish' | 'error';
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    layout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    separator?: {
        type: StringConstructor;
        value?: 'line' | 'dashed' | 'arrow';
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'dot';
    };
}
export interface TdStepItemProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    status?: {
        type: StringConstructor;
        value?: StepStatus;
    };
    subStepItems?: {
        type: ArrayConstructor;
        value?: SubStepItem[];
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type StepStatus = 'default' | 'process' | 'finish' | 'error';
export interface SubStepItem {
    status: StepStatus;
    title: string;
}
