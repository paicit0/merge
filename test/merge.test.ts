import { merge } from '../src/merge';

describe('merge function', () => {
  test('should merge and sort the arrays correctly', () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [6, 5, 2];
    const collection_3 = [3, 8, 9];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle empty arrays correctly', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  test('should handle arrays with different lengths correctly', () => {
    const collection_1 = [1];
    const collection_2 = [5, 4, 3];
    const collection_3 = [2, 6, 7, 8];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
