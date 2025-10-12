import {
  $ArraySplitByModel,
  ArrayData,
  ArrayPredicate,
  ArraySplitByModel,
  newArrayData,
  newArraySplitByModel,
  nothing,
} from '#common';
import {$Model} from '#typing';

// [1, 2, 3, 0, 5].splitBy(x=>x===0) is [{splitter: nothing, items: [1, 2, 3]}, {splitter: 0, items: [5]}]
export function splitByArrayMethod<T>(
  this: ArrayData<T>,
  predicate: ArrayPredicate<T>,
): ArrayData<ArraySplitByModel<T>> {
  const result = newArrayData<ArraySplitByModel<T>>($ArraySplitByModel());

  for (let index = 0; index < this.count(); index++) {
    const item = this.at2(index);

    if (predicate(item, index)) {
      const splitByItem = newArraySplitByModel<T>(item, newArrayData($Model()));
      result.addLastItem(splitByItem);

      continue;
    }

    if (result.isEmpty()) {
      const splitByItem = newArraySplitByModel<T>(nothing, newArrayData($Model()));
      result.addLastItem(splitByItem);
    }

    result.last()?.items.addLastItem(item);
  }

  return result;
}
