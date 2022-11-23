var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-cascader`;
const defaultOptionLabel = '选择选项';
let Cascader = class Cascader extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = props;
        this.data = {
            prefix,
            name,
            stepIndex: 0,
            selectedIndexes: [],
            selectedValue: [],
            defaultOptionLabel,
            steps: [defaultOptionLabel],
        };
        this.observers = {
            visible(v) {
                if (v) {
                    const $tabs = this.selectComponent('#tabs');
                    $tabs === null || $tabs === void 0 ? void 0 : $tabs.setTrack();
                }
            },
            'value, options'() {
                this.initWithValue();
            },
            'selectedIndexes, options'() {
                var _a, _b, _c, _d;
                const { options, selectedIndexes, keys } = this.data;
                const selectedValue = [];
                const steps = [];
                const items = [options];
                for (let i = 0, size = selectedIndexes.length; i < size; i += 1) {
                    const index = selectedIndexes[i];
                    const next = items[i][index];
                    selectedValue.push(next[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value']);
                    steps.push(next[(_b = keys === null || keys === void 0 ? void 0 : keys.label) !== null && _b !== void 0 ? _b : 'label']);
                    if (next[(_c = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _c !== void 0 ? _c : 'children']) {
                        items.push(next[(_d = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _d !== void 0 ? _d : 'children']);
                    }
                }
                if (steps.length < items.length) {
                    steps.push(defaultOptionLabel);
                }
                this.setData({
                    steps,
                    items,
                    selectedValue,
                    stepIndex: items.length - 1,
                });
            },
        };
        this.methods = {
            initWithValue() {
                if (this.data.value != null) {
                    const selectedIndexes = this.getIndexesByValue(this.data.options, this.data.value);
                    if (selectedIndexes) {
                        this.setData({ selectedIndexes });
                    }
                }
            },
            getIndexesByValue(options, value) {
                var _a, _b, _c;
                const { keys } = this.data;
                for (let i = 0, size = options.length; i < size; i += 1) {
                    const opt = options[i];
                    if (opt[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value) {
                        return [i];
                    }
                    if (opt[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) {
                        const res = this.getIndexesByValue(opt[(_c = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _c !== void 0 ? _c : 'children'], value);
                        if (res) {
                            return [i, ...res];
                        }
                    }
                }
            },
            hide() {
                this.setData({ visible: false });
            },
            onStepClick(e) {
                const { index } = e.currentTarget.dataset;
                this.setData({ stepIndex: index });
            },
            onTabChange(e) {
                const { value } = e.detail;
                this.setData({
                    stepIndex: value,
                });
            },
            handleSelect(e) {
                var _a, _b, _c;
                const { level } = e.target.dataset;
                const { value } = e.detail;
                const { selectedIndexes, items, keys } = this.data;
                const index = items[level].findIndex((item) => { var _a; return item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'] === value; });
                const item = items[level][index];
                if (item.disabled) {
                    return;
                }
                selectedIndexes[level] = index;
                selectedIndexes.length = level + 1;
                this.triggerEvent('pick', item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'], index);
                if ((_c = item === null || item === void 0 ? void 0 : item[(_b = keys === null || keys === void 0 ? void 0 : keys.children) !== null && _b !== void 0 ? _b : 'children']) === null || _c === void 0 ? void 0 : _c.length) {
                    this.setData({ selectedIndexes });
                }
                else {
                    this.setData({ selectedIndexes }, () => {
                        var _a;
                        const { items } = this.data;
                        this.triggerEvent('change', {
                            value: item[(_a = keys === null || keys === void 0 ? void 0 : keys.value) !== null && _a !== void 0 ? _a : 'value'],
                            selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
                        });
                    });
                    this.hide();
                }
            },
        };
    }
};
Cascader = __decorate([
    wxComponent()
], Cascader);
export default Cascader;
