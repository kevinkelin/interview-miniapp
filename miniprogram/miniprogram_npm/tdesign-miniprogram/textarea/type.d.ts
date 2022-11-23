export interface TdTextareaProps {
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autofocus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autosize?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmHold?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmType?: {
        type: StringConstructor;
        value?: 'return' | 'send' | 'search' | 'next' | 'go' | 'done';
    };
    cursorSpacing?: {
        type: NumberConstructor;
        value?: number;
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
        value?: ['t-class', 't-class-textarea', 't-class-label'];
    };
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    maxcharacter?: {
        type: NumberConstructor;
        value?: number;
    };
    maxlength?: {
        type: NumberConstructor;
        value?: number;
    };
    placeholder?: {
        type: StringConstructor;
        value?: string;
    };
    value?: {
        type: StringConstructor;
        value?: string;
    };
    defaultValue?: {
        type: StringConstructor;
        value?: string;
    };
}
