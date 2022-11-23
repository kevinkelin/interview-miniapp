import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class SwiperItem extends SuperComponent {
    relations: RelationsOptions;
    data: {
        index: number;
        classPrefix: string;
        translate: string;
    };
    setIndex(index: number, direction: string): void;
}
