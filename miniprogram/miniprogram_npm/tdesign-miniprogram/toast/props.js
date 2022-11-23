const props = {
    customStyle: {
        type: String,
        value: '',
    },
    direction: {
        type: String,
        value: 'row',
    },
    duration: {
        type: Number,
        value: 2000,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: String,
        value: '',
    },
    message: {
        type: String,
    },
    overlayProps: {
        type: Object,
        value: {},
    },
    placement: {
        type: String,
        value: 'middle',
    },
    preventScrollThrough: {
        type: Boolean,
        value: false,
    },
    showOverlay: {
        type: Boolean,
        value: false,
    },
    theme: {
        type: String,
    },
};
export default props;
