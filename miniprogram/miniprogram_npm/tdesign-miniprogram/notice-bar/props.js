const props = {
    content: {
        type: String,
    },
    customStyle: {
        type: String,
        value: '',
    },
    externalClasses: {
        type: Array,
    },
    extra: {
        type: String,
    },
    marquee: {
        type: null,
        value: false,
    },
    prefixIcon: {
        type: String,
        value: '',
    },
    suffixIcon: {
        type: String,
        value: '',
    },
    theme: {
        type: String,
        value: 'info',
    },
    visible: {
        type: Boolean,
        value: null,
    },
    defaultVisible: {
        type: Boolean,
        value: false,
    },
};
export default props;
