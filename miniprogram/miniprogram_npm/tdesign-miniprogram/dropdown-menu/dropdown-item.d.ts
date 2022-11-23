import { RelationsOptions, SuperComponent } from '../common/src/index';
import type { TdDropdownItemProps } from './type';
export interface DropdownItemProps extends TdDropdownItemProps {
}
export default class DropdownMenuItem extends SuperComponent {
    externalClasses: string[];
    properties: {
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
            value?: ["t-class", "t-class-content", "t-class-column", "t-class-column-item", "t-class-column-item-label", "t-class-tree", "t-class-tree-item", "t-class-tree-columns", "t-class-tree-columns-item", "t-class-tree-columns-item-label", "t-class-footer"];
        };
        keys?: {
            type: ObjectConstructor;
            value?: import("../common/common").KeysType;
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
            value?: import("./type").TdDropdownItemOption[];
        };
        optionsColumns?: {
            type: null;
            value?: string | number;
        };
        optionsLayout?: {
            type: StringConstructor;
            value?: "columns" | "tree";
        };
        value?: {
            type: null;
            value?: import("./type").TdDropdownItemOptionValueType | import("./type").TdDropdownItemOptionValueType[];
        };
        defaultValue?: {
            type: null;
            value?: import("./type").TdDropdownItemOptionValueType | import("./type").TdDropdownItemOptionValueType[];
        };
    };
    data: {
        prefix: string;
        classPrefix: string;
        show: boolean;
        top: number;
        maskHeight: number;
        contentClasses: string;
        leafLevel: number;
        treeOptions: any[];
        initValue: any;
        hasChanged: boolean;
        duration: string | number;
        zIndex: number;
        overlay: boolean;
        labelAlias: string;
        valueAlias: string;
    };
    parent: any;
    relations: RelationsOptions;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(v: any): void;
        'initValue, value'(v1: any, v2: any): void;
        label(): void;
        keys(obj: any): void;
        show(visible: any): void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        buildTreeOptions(): void;
        closeDropdown(): void;
        getParentBottom(parent: any, cb: any): void;
        handleTreeClick(e: any): void;
        handleRadioChange(e: any): void;
        handleMaskClick(): void;
        handleReset(): void;
        handleConfirm(): void;
        onLeaved(): void;
    };
}
