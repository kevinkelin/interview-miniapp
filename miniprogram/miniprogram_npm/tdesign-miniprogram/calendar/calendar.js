var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import TCalendar from '../common/shared/calendar/index';
const { prefix } = config;
const name = `${prefix}-calendar`;
let Calendar = class Calendar extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
            styleIsolation: 'apply-shared',
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            months: [],
        };
        this.lifetimes = {
            ready() {
                let { confirmBtn } = this.data;
                if (!confirmBtn) {
                    confirmBtn = { content: '确认' };
                }
                this.base = new TCalendar(this.properties);
                this.setData({
                    days: this.base.getDays(),
                    confirmBtn,
                });
                this.calcMonths();
            },
        };
        this.methods = {
            calcMonths() {
                const months = this.base.getMonths();
                this.setData({
                    months,
                });
            },
            handleClose() {
                this.setData({ visible: false });
            },
            handleSelect(e) {
                const { date, year, month } = e.currentTarget.dataset;
                if (date.type === 'disabled')
                    return;
                const value = this.base.select({ cellType: date.type, year, month, date: date.day });
                this.base.value = value;
                this.calcMonths();
            },
            onTplButtonTap() {
                const value = this.base.getTrimValue();
                this.triggerEvent('confirm', { value });
            },
        };
    }
};
Calendar = __decorate([
    wxComponent()
], Calendar);
export default Calendar;
