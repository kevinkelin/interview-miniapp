import { SuperComponent } from '../common/src/index';
import type { TdBadgeProps } from './type';
export interface BadgeProps extends TdBadgeProps {
}
export default class Badge extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: TdBadgeProps;
    data: {
        prefix: string;
        classPrefix: string;
        value: string;
    };
}
