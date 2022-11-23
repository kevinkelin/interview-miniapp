import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class AvatarGroup extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdAvatarGroupProps;
    data: {
        prefix: string;
        classPrefix: string;
        hasChild: boolean;
        length: number;
        className: string;
    };
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    ready(): void;
    lifetimes: {
        attached(): void;
    };
    methods: {
        isINcludePX(size: any): boolean;
        setClass(): void;
        handleHasChild(children: any, hasChild: any): void;
        handleChildSlot(max: any, children: any, f: any): void;
        handleChildMax(max: any, children: any, isSlotElement: any): void;
        handleChildSize(size: any, children: any): void;
        handleChildCascading(cascading: any, children: any): void;
    };
}
