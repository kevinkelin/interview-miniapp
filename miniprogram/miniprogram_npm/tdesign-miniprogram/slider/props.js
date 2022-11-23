const props = {
    colors: {
        type: Array,
        value: ['#0052D9', 'rgba(220, 220, 220, 1)'],
    },
    customStyle: {
        type: String,
        value: '',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    disabledColor: {
        type: Array,
        value: ['#bbd3fb', '#dcdcdc'],
    },
    externalClasses: {
        type: Array,
    },
    label: {
        type: null,
        value: false,
    },
    marks: {
        type: null,
        value: {},
    },
    max: {
        type: Number,
        value: 100,
    },
    min: {
        type: Number,
        value: 0,
    },
    range: {
        type: Boolean,
        value: false,
    },
    showExtremeValue: {
        type: Boolean,
        value: false,
    },
    step: {
        type: Number,
        value: 1,
    },
    value: {
        type: null,
        value: null,
    },
    defaultValue: {
        type: null,
        value: 0,
    },
};
export default props;
