import { SuperComponent } from '../common/src/index';
export default class CheckTag extends SuperComponent {
    data: {
        prefix: string;
        classPrefix: string;
        className: string;
    };
    properties: import("./type").TdCheckTagProps;
    externalClasses: string[];
    controlledProps: {
        key: string;
        event: string;
    }[];
    options: {
        multipleSlots: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    observers: {
        'size, shape, closable, disabled, checked'(): void;
    };
    methods: {
        setClass(): void;
        handleClose(e: WechatMiniprogram.BaseEvent): void;
        handleChange(): void;
    };
}
