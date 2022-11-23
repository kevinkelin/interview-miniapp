const props = {
    actions: {
        type: Array,
    },
    buttonLayout: {
        type: String,
        value: 'horizontal',
    },
    cancelBtn: {
        type: null,
        value: '',
    },
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    confirmBtn: {
        type: null,
        value: '',
    },
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
    overlayProps: {
        type: Object,
        value: {},
    },
    preventScrollThrough: {
        type: Boolean,
        value: true,
    },
    showOverlay: {
        type: Boolean,
        value: true,
    },
    title: {
        type: String,
    },
    visible: {
        type: Boolean,
        value: false,
    },
    zIndex: {
        type: Number,
        value: 11500,
    },
};
export default props;
