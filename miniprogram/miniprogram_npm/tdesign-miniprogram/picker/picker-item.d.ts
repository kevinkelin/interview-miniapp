import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class PickerItem extends SuperComponent {
    relations: RelationsOptions;
    properties: import("./type").TdPickerItemProps;
    observers: {
        options(this: PickerItem): void;
    };
    data: {
        classPrefix: string;
        offset: number;
        duration: number;
        value: string;
    };
    methods: {
        onTouchStart(event: any): void;
        onTouchMove(event: any): void;
        onTouchEnd(): void;
        update(): void;
        resetOrigin(): void;
        getCount(): any;
    };
    calculateViewDeltaY(touchDeltaY: number): number;
    created(): void;
}
