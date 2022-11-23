const props = {
    closable: {
        type: Boolean,
        value: false,
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
    icon: {
        type: String,
        value: '',
    },
    maxWidth: {
        type: String,
        optionalTypes: [Number],
    },
    shape: {
        type: String,
        value: 'square',
    },
    size: {
        type: String,
        value: 'medium',
    },
    theme: {
        type: String,
        value: 'default',
    },
    variant: {
        type: String,
        value: 'dark',
    },
};
export default props;
