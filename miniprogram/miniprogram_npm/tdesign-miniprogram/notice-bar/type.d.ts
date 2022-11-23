export interface TdNoticeBarProps {
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
        value?: ['t-class', 't-class-content', 't-class-prefix-icon', 't-class-extra', 't-class-suffix-icon'];
    };
    extra?: {
        type: StringConstructor;
        value?: string;
    };
    marquee?: {
        type: null;
        value?: boolean | DrawMarquee;
    };
    prefixIcon?: {
        type: StringConstructor;
        value?: string;
    };
    suffixIcon?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'info' | 'success' | 'warning' | 'error';
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface DrawMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
