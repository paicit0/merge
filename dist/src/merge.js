"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2, collection_3) {
    const mergedArray = [];
    let i = 0, j = collection_2.length - 1, k = 0;
    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            mergedArray.push(collection_1[i++]);
        }
        else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            mergedArray.push(collection_2[j--]);
        }
        else {
            mergedArray.push(collection_3[k++]);
        }
    }
    while (i < collection_1.length)
        mergedArray.push(collection_1[i++]);
    while (j >= 0)
        mergedArray.push(collection_2[j--]);
    while (k < collection_3.length)
        mergedArray.push(collection_3[k++]);
    return mergedArray;
}
exports.merge = merge;
