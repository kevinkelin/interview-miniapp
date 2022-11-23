export interface TdResultProps {
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
        value?: ['t-class', 't-class-description', 't-class-image'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    iconProps?: {
        type: ObjectConstructor;
        value?: object;
    };
    image?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'success' | 'warning' | 'error';
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
