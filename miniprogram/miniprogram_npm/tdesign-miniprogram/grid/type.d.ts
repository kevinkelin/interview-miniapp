import { BadgeProps } from '../badge/index';
export interface TdGridProps {
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center';
    };
    border?: {
        type: null;
        value?: boolean | {
            color?: string;
            width?: string;
            style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
        };
    };
    column?: {
        type: NumberConstructor;
        value?: number;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    gutter?: {
        type: NumberConstructor;
        value?: number;
    };
    hover?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'card';
    };
}
export interface TdGridItemProps {
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    description?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-image', 't-class-text', 't-class-description'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    image?: {
        type: StringConstructor;
        value?: string;
    };
    imageProps?: {
        type: ObjectConstructor;
        value?: object;
    };
    jumpType?: {
        type: StringConstructor;
        value?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
    };
    layout?: {
        type: StringConstructor;
        value?: 'vertical' | 'horizontal';
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
    url?: {
        type: StringConstructor;
        value?: string;
    };
}
