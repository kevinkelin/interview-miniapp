const props = {
    align: {
        type: String,
        value: 'left',
    },
    allowUncheck: {
        type: Boolean,
        value: false,
    },
    checked: {
        type: Boolean,
        value: null,
    },
    defaultChecked: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
    },
    contentDisabled: {
        type: Boolean,
        value: false,
    },
    customStyle: {
        type: String,
        value: '',
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: null,
        value: 'fill-circle',
    },
    label: {
        type: String,
    },
    maxContentRow: {
        type: Number,
        value: 5,
    },
    maxLabelRow: {
        type: Number,
        value: 3,
    },
    name: {
        type: String,
        value: '',
    },
    value: {
        type: null,
        value: false,
    },
};
export default props;
