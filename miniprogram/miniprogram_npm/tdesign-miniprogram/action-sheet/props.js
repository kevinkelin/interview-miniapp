const props = {
    cancelText: {
        type: String,
        value: '取消',
    },
    count: {
        type: Number,
        value: 8,
    },
    customStyle: {
        type: String,
        value: '',
    },
    externalClasses: {
        type: Array,
    },
    items: {
        type: Array,
    },
    showCancel: {
        type: Boolean,
        value: true,
    },
    theme: {
        type: String,
        value: 'list',
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
