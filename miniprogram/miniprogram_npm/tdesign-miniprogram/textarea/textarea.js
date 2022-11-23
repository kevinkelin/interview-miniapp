var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-textarea`;
let Textarea = class Textarea extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.behaviors = ['wx://form-field'];
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-textarea`, `${prefix}-class-label`];
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            count: 0,
        };
        this.lifetimes = {
            ready() {
                const { value } = this.properties;
                this.updateValue(value);
            },
        };
        this.methods = {
            updateValue(value) {
                const { maxcharacter, maxlength } = this.properties;
                if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
                    const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
                    this.setData({
                        value: characters,
                        count: length,
                    });
                }
                else if (maxlength > 0 && !Number.isNaN(maxlength)) {
                    const { length, characters } = getCharacterLength('maxlength', value, maxlength);
                    this.setData({
                        value: characters,
                        count: length,
                    });
                }
                else {
                    this.setData({
                        value,
                        count: value ? String(value).length : 0,
                    });
                }
            },
            onInput(event) {
                const { value } = event.detail;
                this.updateValue(value);
                this.triggerEvent('change', { value: this.data.value });
            },
            onFocus(event) {
                this.triggerEvent('focus', Object.assign({}, event.detail));
            },
            onBlur(event) {
                this.triggerEvent('blur', Object.assign({}, event.detail));
            },
            onConfirm(event) {
                this.triggerEvent('enter', Object.assign({}, event.detail));
            },
            onLineChange(event) {
                this.triggerEvent('lineChange', Object.assign({}, event.detail));
            },
        };
    }
};
Textarea = __decorate([
    wxComponent()
], Textarea);
export default Textarea;
