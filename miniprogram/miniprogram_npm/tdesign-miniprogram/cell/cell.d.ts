import { SuperComponent } from '../common/src/index';
export default class Cell extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdCellProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
    onClick(e: any): void;
    jumpLink(urlKey?: string, link?: string): void;
}
