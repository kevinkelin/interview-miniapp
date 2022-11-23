import { SuperComponent } from '../common/src/index';
export default class Textarea extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    behaviors: string[];
    externalClasses: string[];
    properties: import("./type").TdTextareaProps;
    data: {
        prefix: string;
        classPrefix: string;
        count: number;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateValue(value: any): void;
        onInput(event: any): void;
        onFocus(event: any): void;
        onBlur(event: any): void;
        onConfirm(event: any): void;
        onLineChange(event: any): void;
    };
}
