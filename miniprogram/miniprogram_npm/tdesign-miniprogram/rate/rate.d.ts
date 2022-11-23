import { SuperComponent } from '../common/src/index';
export default class Rate extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdRateProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
        defaultTexts: string[];
        disabledColor: string;
    };
    onTouch(e: any): void;
}
