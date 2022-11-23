const props = {
    animation: {
        type: String,
        value: 'slide',
    },
    autoplay: {
        type: Boolean,
        value: true,
    },
    current: {
        type: Number,
        value: null,
    },
    defaultCurrent: {
        type: Number,
        value: 0,
    },
    customStyle: {
        type: String,
        value: '',
    },
    direction: {
        type: String,
        value: 'horizontal',
    },
    duration: {
        type: Number,
        value: 300,
    },
    height: {
        type: Number,
    },
    interval: {
        type: Number,
        value: 5000,
    },
    loop: {
        type: Boolean,
        value: true,
    },
    navigation: {
        type: Object,
    },
    paginationPosition: {
        type: String,
        value: 'bottom',
    },
};
export default props;
