export interface TdActionSheetProps {
    cancelText?: {
        type: StringConstructor;
        value?: string;
    };
    count?: {
        type: NumberConstructor;
        value?: number;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-image', 't-class-content'];
    };
    items: {
        type: ArrayConstructor;
        value?: Array<string | ActionSheetItem>;
    };
    showCancel?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'list' | 'grid';
    };
    visible: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface ActionSheetItem {
    label: string;
    color?: string;
    disabled?: boolean;
}
