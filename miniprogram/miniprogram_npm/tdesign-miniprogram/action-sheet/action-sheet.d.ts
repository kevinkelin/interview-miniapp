import { SuperComponent } from '../common/src/index';
export default class ActionSheet extends SuperComponent {
    static show: (options: import("./show").ActionSheetShowOption) => WechatMiniprogram.Component.TrivialInstance;
    externalClasses: string[];
    properties: {
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
            value?: ["t-class", "t-class-image", "t-class-content"];
        };
        items: {
            type: ArrayConstructor;
            value?: (string | import("./type").ActionSheetItem)[];
        };
        showCancel?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        theme?: {
            type: StringConstructor;
            value?: "list" | "grid";
        };
        visible: {
            type: BooleanConstructor;
            value?: boolean;
        };
        defaultVisible: {
            type: BooleanConstructor;
            value?: boolean;
        };
    };
    data: {
        prefix: string;
        classPrefix: string;
        gridThemeItems: any[];
        currentSwiperIndex: number;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    ready(): void;
    methods: {
        onSwiperChange(e: WechatMiniprogram.TouchEvent): void;
        splitGridThemeActions(): void;
        show(options: any): void;
        memoInitialData(): void;
        close(): void;
        onPopupVisibleChange({ detail }: {
            detail: any;
        }): void;
        onSelect(event: WechatMiniprogram.TouchEvent): void;
        onCancel(): void;
    };
}
