import { SuperComponent } from '../common/src/index';
export default class BackTop extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdBackTopProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
    toTop(): void;
}
