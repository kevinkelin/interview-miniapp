const props = {
    customStyle: {
        type: String,
        value: '',
    },
    disabled: {
        type: Boolean,
    },
    left: {
        type: Array,
    },
    opened: {
        type: Boolean,
        optionalTypes: [Array],
        value: false,
    },
    right: {
        type: Array,
    },
};
export default props;
