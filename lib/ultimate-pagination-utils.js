"use strict";
exports.__esModule = true;
function createRange(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
exports.createRange = createRange;
function map(arr, callbackfn, thisArg) {
    if (arr == null) {
        return [];
    }
    var len = arr.length;
    var out = new Array(len);
    for (var i = 0; i < len; i++) {
        out[i] = callbackfn(arr[i], i, arr);
    }
    return out;
}
exports.map = map;
//# sourceMappingURL=ultimate-pagination-utils.js.map