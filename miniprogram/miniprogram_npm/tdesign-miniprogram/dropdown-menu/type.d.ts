import { KeysType } from '../common/common';
export interface TdDropdownMenuProps {
    activeColor?: {
        type: StringConstructor;
        value?: string;
    };
    closeOnClickOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    duration?: {
        type: null;
        value?: string | number;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-menu', 't-class-menu-item', 't-class-menu-label', 't-class-menu-icon'];
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export interface TdDropdownItemProps {
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
        value?: [
            't-class',
            't-class-content',
            't-class-column',
            't-class-column-item',
            't-class-column-item-label',
            't-class-tree',
            't-class-tree-item',
            't-class-tree-columns',
            't-class-tree-columns-item',
            't-class-tree-columns-item-label',
            't-class-footer'
        ];
    };
    keys?: {
        type: ObjectConstructor;
        value?: KeysType;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    multiple?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<TdDropdownItemOption>;
    };
    optionsColumns?: {
        type: null;
        value?: string | number;
    };
    optionsLayout?: {
        type: StringConstructor;
        value?: 'columns' | 'tree';
    };
    value?: {
        type: null;
        value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
    };
    defaultValue?: {
        type: null;
        value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
    };
}
export interface TdDropdownItemOption {
    label: string;
    disabled: boolean;
    value: TdDropdownItemOptionValueType;
    [key: string]: any;
}
export declare type TdDropdownItemOptionValueType = string | number;
