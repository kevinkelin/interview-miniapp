export interface TdDrawerProps {
    closeOnOverlayClick?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    destroyOnClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    items?: {
        type: ArrayConstructor;
        value?: DrawerItem[];
    };
    placement?: {
        type: StringConstructor;
        value?: 'left' | 'right';
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export interface DrawerItem {
    title: string;
    icon: string;
}
