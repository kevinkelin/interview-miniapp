import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class GridItem extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    properties: import("./type").TdGridItemProps;
    data: {
        prefix: string;
        classPrefix: string;
        gridItemStyle: string;
        gridItemWrapperStyle: string;
        gridItemContentStyle: string;
        align: string;
        layout: string;
        column: number;
    };
    updateStyle(): void;
    getWidthStyle(): string;
    getPaddingStyle(): string;
    getBorderStyle(): string;
    onClick(e: any): void;
    jumpLink(): void;
}
