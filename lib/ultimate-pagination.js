"use strict";
exports.__esModule = true;
var ultimate_pagination_utils_1 = require("./ultimate-pagination-utils");
var ultimate_pagination_item_factories_1 = require("./ultimate-pagination-item-factories");
function getPaginationModel(options) {
    if (options == null) {
        throw new Error('getPaginationModel(): options object should be a passed');
    }
    var totalPages = Number(options.totalPages);
    if (isNaN(totalPages)) {
        throw new Error('getPaginationModel(): totalPages should be a number');
    }
    if (totalPages < 0) {
        throw new Error('getPaginationModel(): totalPages shouldn\'t be a negative number');
    }
    var currentPage = Number(options.currentPage);
    if (isNaN(currentPage)) {
        throw new Error('getPaginationModel(): currentPage should be a number');
    }
    if (currentPage < 0) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be a negative number');
    }
    if (currentPage > totalPages) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be greater than totalPages');
    }
    var boundaryPagesRange = (options.boundaryPagesRange == null ? 1 : Number(options.boundaryPagesRange));
    if (isNaN(boundaryPagesRange)) {
        throw new Error('getPaginationModel(): boundaryPagesRange should be a number');
    }
    if (boundaryPagesRange < 0) {
        throw new Error('getPaginationModel(): boundaryPagesRange shouldn\'t be a negative number');
    }
    var siblingPagesRange = (options.siblingPagesRange == null ? 1 : Number(options.siblingPagesRange));
    if (isNaN(siblingPagesRange)) {
        throw new Error('getPaginationModel(): siblingPagesRange should be a number');
    }
    if (siblingPagesRange < 0) {
        throw new Error('getPaginationModel(): siblingPagesRange shouldn\'t be a negative number');
    }
    var hidePreviousAndNextPageLinks = Boolean(options.hidePreviousAndNextPageLinks);
    var hideFirstAndLastPageLinks = Boolean(options.hideFirstAndLastPageLinks);
    var hideEllipsis = Boolean(options.hideEllipsis);
    var ellipsisSize = (hideEllipsis ? 0 : 1);
    var paginationModel = [];
    var createPage = ultimate_pagination_item_factories_1.createPageFunctionFactory(options);
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createFirstPageLink(options));
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createPreviousPageLink(options));
    }
    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >= totalPages) {
        var allPages = ultimate_pagination_utils_1.map(ultimate_pagination_utils_1.createRange(1, totalPages), createPage);
        paginationModel.push.apply(paginationModel, allPages);
    }
    else {
        // Calculate group of first pages
        var firstPagesStart = 1;
        var firstPagesEnd = boundaryPagesRange;
        var firstPages = ultimate_pagination_utils_1.map(ultimate_pagination_utils_1.createRange(firstPagesStart, firstPagesEnd), createPage);
        // Calculate group of last pages
        var lastPagesStart = totalPages + 1 - boundaryPagesRange;
        var lastPagesEnd = totalPages;
        var lastPages = ultimate_pagination_utils_1.map(ultimate_pagination_utils_1.createRange(lastPagesStart, lastPagesEnd), createPage);
        // Calculate group of main pages
        var mainPagesStart = Math.min(Math.max(currentPage - siblingPagesRange, firstPagesEnd + ellipsisSize + 1), lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1);
        var mainPagesEnd = mainPagesStart + 2 * siblingPagesRange;
        var mainPages = ultimate_pagination_utils_1.map(ultimate_pagination_utils_1.createRange(mainPagesStart, mainPagesEnd), createPage);
        // Add group of first pages
        paginationModel.push.apply(paginationModel, firstPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis before group of main pages
            var firstEllipsisPageNumber = mainPagesStart - 1;
            var showPageInsteadOfFirstEllipsis = (firstEllipsisPageNumber === firstPagesEnd + 1);
            var createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis ? createPage : ultimate_pagination_item_factories_1.createFirstEllipsis;
            var firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber);
            paginationModel.push(firstEllipsis);
        }
        // Add group of main pages
        paginationModel.push.apply(paginationModel, mainPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis after group of main pages
            var secondEllipsisPageNumber = mainPagesEnd + 1;
            var showPageInsteadOfSecondEllipsis = (secondEllipsisPageNumber === lastPagesStart - 1);
            var createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis ? createPage : ultimate_pagination_item_factories_1.createSecondEllipsis;
            var secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber);
            paginationModel.push(secondEllipsis);
        }
        // Add group of last pages
        paginationModel.push.apply(paginationModel, lastPages);
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createNextPageLink(options));
    }
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createLastPageLink(options));
    }
    return paginationModel;
}
exports.getPaginationModel = getPaginationModel;
var ultimate_pagination_constants_1 = require("./ultimate-pagination-constants");
exports.ITEM_TYPES = ultimate_pagination_constants_1.ITEM_TYPES;
exports.ITEM_KEYS = ultimate_pagination_constants_1.ITEM_KEYS;
//# sourceMappingURL=ultimate-pagination.js.map