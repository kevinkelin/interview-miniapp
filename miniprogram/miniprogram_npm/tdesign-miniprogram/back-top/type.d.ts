export interface TdBackTopProps {
    customStyle?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-icon', 't-class-text'];
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'round' | 'half-round' | 'round-dark' | 'half-round-dark';
    };
}
