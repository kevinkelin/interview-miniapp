const getCurrentPage = function () {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
};
const onPageScroll = function (event) {
    const page = getCurrentPage();
    if (!page)
        return;
    const { pageScroller } = page;
    pageScroller.forEach((scroller) => {
        if (typeof scroller === 'function') {
            scroller(event);
        }
    });
};
export const pageScrollMixin = (scroller) => {
    let bindScroller = scroller;
    return Behavior({
        attached() {
            const page = getCurrentPage();
            if (!page)
                return;
            bindScroller = scroller.bind(this);
            if (Array.isArray(page.pageScroller)) {
                page.pageScroller.push(bindScroller);
            }
            else {
                page.pageScroller =
                    typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), bindScroller] : [bindScroller];
            }
            page.onPageScroll = onPageScroll;
        },
        detached() {
            var _a;
            const page = getCurrentPage();
            if (!page)
                return;
            page.pageScroller = ((_a = page.pageScroller) === null || _a === void 0 ? void 0 : _a.filter((item) => item !== scroller)) || [];
        },
    });
};
export const getRect = function (context, selector) {
    return new Promise((resolve) => {
        wx.createSelectorQuery()
            .in(context)
            .select(selector)
            .boundingClientRect()
            .exec((rect = []) => resolve(rect[0]));
    });
};
