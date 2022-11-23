const props = {
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    autofocus: {
        type: Boolean,
        value: false,
    },
    autosize: {
        type: Boolean,
        value: false,
    },
    confirmHold: {
        type: Boolean,
        value: false,
    },
    confirmType: {
        type: String,
        value: 'return',
    },
    cursorSpacing: {
        type: Number,
        value: 0,
    },
    customStyle: {
        type: String,
        value: '',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    focus: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
    },
    maxcharacter: {
        type: Number,
    },
    maxlength: {
        type: Number,
    },
    placeholder: {
        type: String,
        value: undefined,
    },
    value: {
        type: String,
        value: null,
    },
    defaultValue: {
        type: String,
        value: '',
    },
};
export default props;
