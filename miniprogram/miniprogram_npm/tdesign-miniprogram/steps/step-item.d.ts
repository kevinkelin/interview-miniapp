import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class StepItem extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdStepItemProps;
    parent: any;
    data: {
        classPrefix: string;
        prefix: string;
        rootClassName: string;
        index: number;
        isDot: boolean;
        curStatus: string;
        curSubStepItems: any[];
        curSubStepItemsStatus: any[];
        layout: string;
        type: string;
        isLastChild: boolean;
        isLarge: boolean;
        readonly: boolean;
        computedIcon: string;
    };
    observers: {
        icon(val: any): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateStatus(current: any, currentStatus: any, index: any, theme: any, layout: any, steps: any, readonly: any): void;
        click(): void;
    };
}
