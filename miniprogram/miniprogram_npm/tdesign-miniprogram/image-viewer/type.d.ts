export interface TdImageViewerProps {
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    backgroundColor?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    images?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    initialIndex?: {
        type: NumberConstructor;
        value?: number;
    };
    showIndex?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    deleteBtn?: {
        type: BooleanConstructor;
        value: false;
    };
    closeBtn?: {
        type: BooleanConstructor;
        value: false;
    };
    deleteIconProps: {
        type: ObjectConstructor;
        value?: object;
    };
    closeIconProps: {
        type: ObjectConstructor;
        value?: object;
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
