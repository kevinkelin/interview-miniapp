const props = {
    customStyle: {
        type: String,
        value: '',
    },
    backgroundColor: {
        type: String,
        optionalTypes: [Number],
        value: 'rgba(0, 0, 0, 1)',
    },
    images: {
        type: Array,
        value: [],
    },
    initialIndex: {
        type: Number,
        value: 0,
    },
    showIndex: {
        type: Boolean,
        value: false,
    },
    deleteBtn: {
        type: Boolean,
        value: false,
    },
    closeBtn: {
        type: Boolean,
        value: false,
    },
    deleteIconProps: {
        type: Object,
        value: {},
    },
    closeIconProps: {
        type: Object,
        value: {},
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
