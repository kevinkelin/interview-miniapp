import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Picker extends SuperComponent {
    properties: import("./type").TdPickerProps;
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    observers: {
        value(): void;
    };
    data: {
        prefix: string;
        classPrefix: string;
    };
    methods: {
        getPickerColumns(): any[];
        updateChildren(): void;
        getSelectedValue(): any[];
        getColumnIndexes(): any;
        onConfirm(): void;
        triggerColumnChange({ column, index }: {
            column: any;
            index: any;
        }): void;
        onCancel(): void;
        onPopupChange(e: any): void;
        close(): void;
    };
    ready(): void;
}
