import { BadgeProps } from '../badge/index';
export interface TdTabBarProps {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    safeAreaInsetBottom?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    shape?: {
        type: StringConstructor;
        value?: 'normal' | 'round';
    };
    split?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    style?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'normal' | 'tag';
    };
    value?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
    defaultValue?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
}
export interface TdTabBarItemProps {
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    style?: {
        type: StringConstructor;
        value?: string;
    };
    subTabBar?: {
        type: ArrayConstructor;
        value?: SubTabBarItem[];
    };
    value?: {
        type: null;
        value?: string | number;
    };
}
export interface SubTabBarItem {
    value: string;
    label: string;
}
