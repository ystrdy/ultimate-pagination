"use strict";
exports.__esModule = true;
var ultimate_pagination_constants_1 = require("./ultimate-pagination-constants");
exports.createFirstEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createSecondEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.SECOND_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createFirstPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.FIRST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_PAGE_LINK,
        value: 1,
        isActive: currentPage === 1
    };
};
exports.createPreviousPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.PREVIOUS_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.PREVIOUS_PAGE_LINK,
        value: Math.max(1, currentPage - 1),
        isActive: currentPage === 1
    };
};
exports.createNextPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.NEXT_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.NEXT_PAGE_LINK,
        value: Math.min(totalPages, currentPage + 1),
        isActive: currentPage === totalPages
    };
};
exports.createLastPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.LAST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.LAST_PAGE_LINK,
        value: totalPages,
        isActive: currentPage === totalPages
    };
};
exports.createPageFunctionFactory = function (options) {
    var currentPage = options.currentPage;
    return function (pageNumber) {
        return {
            type: ultimate_pagination_constants_1.ITEM_TYPES.PAGE,
            key: pageNumber,
            value: pageNumber,
            isActive: pageNumber === currentPage
        };
    };
};
//# sourceMappingURL=ultimate-pagination-item-factories.js.map