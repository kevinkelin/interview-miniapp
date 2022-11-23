import { SuperComponent } from '../common/src/index';
export default class CellGroup extends SuperComponent {
    externalClasses: string[];
    options: {
        addGlobalClass: boolean;
    };
    properties: import("./type").TdCellGroupProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
}
