import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class CheckBoxGroup extends SuperComponent {
    externalClasses: string[];
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
        checkboxOptions: any[];
    };
    properties: import("../checkbox/type").TdCheckboxGroupProps;
    observers: {
        value(): void;
    };
    lifetimes: {
        attached(): void;
        ready(): void;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    $checkAll: any;
    methods: {
        getChilds(): any;
        updateChildren(): void;
        updateValue({ value, checked, checkAll, indeterminate }: {
            value: any;
            checked: any;
            checkAll: any;
            indeterminate: any;
        }): void;
        initWithOptions(): void;
        handleInnerChildChange(e: any): void;
        setCheckall(): void;
    };
}
