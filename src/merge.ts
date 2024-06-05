export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;
  
    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
      if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
        mergedArray.push(collection_1[i++]);
      } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
        mergedArray.push(collection_2[j--]);
      } else {
        mergedArray.push(collection_3[k++]);
      }
    }
  
    while (i < collection_1.length && j >= 0) {
      if (collection_1[i] <= collection_2[j]) {
        mergedArray.push(collection_1[i++]);
      } else {
        mergedArray.push(collection_2[j--]);
      }
    }
  
    while (i < collection_1.length && k < collection_3.length) {
      if (collection_1[i] <= collection_3[k]) {
        mergedArray.push(collection_1[i++]);
      } else {
        mergedArray.push(collection_3[k++]);
      }
    }
  
    while (j >= 0 && k < collection_3.length) {
      if (collection_2[j] <= collection_3[k]) {
        mergedArray.push(collection_2[j--]);
      } else {
        mergedArray.push(collection_3[k++]);
      }
    }
  
    while (i < collection_1.length) mergedArray.push(collection_1[i++]);
    while (j >= 0) mergedArray.push(collection_2[j--]);
    while (k < collection_3.length) mergedArray.push(collection_3[k++]);
  
    return mergedArray;
  }