import { SuperComponent } from '../common/src/index';
export default class Icon extends SuperComponent {
    behaviors: ['wx://form-field-icon'];
    externalClasses: string[];
    properties: import("./type").TdIconProps;
    data: {
        componentPrefix: string;
        classPrefix: string;
        isImage: boolean;
        iconStyle: any;
    };
    observers: {
        'name, color, size, customStyle'(): void;
    };
    methods: {
        onTap(event: any): void;
        setIconStyle(): void;
    };
}
