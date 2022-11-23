var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './check-tag-props';
import { classNames } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-tag`;
let CheckTag = class CheckTag extends SuperComponent {
    constructor() {
        super(...arguments);
        this.data = {
            prefix,
            classPrefix: name,
            className: '',
        };
        this.properties = props;
        this.externalClasses = [`${prefix}-class`];
        this.controlledProps = [
            {
                key: 'checked',
                event: 'change',
            },
        ];
        this.options = {
            multipleSlots: true,
        };
        this.lifetimes = {
            attached() {
                this.setClass();
            },
        };
        this.observers = {
            'size, shape, closable, disabled, checked'() {
                this.setClass();
            },
        };
        this.methods = {
            setClass() {
                const { prefix, classPrefix } = this.data;
                const { size, shape, variant, closable, disabled, checked, defaultChecked } = this.properties;
                const isChecked = checked || defaultChecked;
                const tagClass = [
                    classPrefix,
                    `${classPrefix}--checkable`,
                    closable ? `${classPrefix}--closable ${prefix}-is-closable` : '',
                    disabled ? `${classPrefix}--disabled ${prefix}-is-disabled` : '',
                    isChecked ? `${classPrefix}--checked ${prefix}-is-checked` : '',
                    `${classPrefix}--theme-${isChecked ? 'primary' : 'default'}`,
                    `${classPrefix}--size-${size || 'medium'}`,
                    `${classPrefix}--shape-${shape || 'square'}`,
                    `${classPrefix}--variant-${variant || 'dark'}`,
                ];
                const className = classNames(tagClass);
                this.setData({
                    className,
                });
            },
            handleClose(e) {
                if (this.data.disabled)
                    return;
                this.triggerEvent('close', e);
            },
            handleChange() {
                if (this.data.disabled)
                    return;
                const { checked, defaultChecked } = this.properties;
                const isChecked = checked || defaultChecked;
                this.setData({
                    checked: !isChecked,
                });
                this._trigger('change', { checked: !isChecked });
            },
        };
    }
};
CheckTag = __decorate([
    wxComponent()
], CheckTag);
export default CheckTag;
