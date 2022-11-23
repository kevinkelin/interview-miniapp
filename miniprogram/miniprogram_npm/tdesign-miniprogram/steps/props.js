const props = {
    current: {
        type: null,
        value: null,
    },
    defaultCurrent: {
        type: null,
        value: 0,
    },
    currentStatus: {
        type: String,
        value: 'process',
    },
    customStyle: {
        type: String,
        value: '',
    },
    externalClasses: {
        type: Array,
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    separator: {
        type: String,
        value: 'line',
    },
    theme: {
        type: String,
        value: 'default',
    },
};
export default props;
