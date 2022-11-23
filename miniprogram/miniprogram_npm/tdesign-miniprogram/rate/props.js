const props = {
    allowHalf: {
        type: Boolean,
        value: false,
    },
    count: {
        type: Number,
        value: 5,
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
    gap: {
        type: Number,
        value: 8,
    },
    showText: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: '20',
    },
    texts: {
        type: Array,
        value: [],
    },
    value: {
        type: Number,
        value: null,
    },
    defaultValue: {
        type: Number,
        value: 0,
    },
    variant: {
        type: String,
        value: 'outline',
    },
};
export default props;
