import {$Model, ArrayData, ArrayPredicate, newArrayData, Nothing, nothing} from '#core';

// todo should we return new array/immutability ???
export function removeArrayMethod<T>(
  this: ArrayData<T>,
  predicate: ArrayPredicate<T>,
): ArrayData<T> | Nothing {
  const lastIndex = this.lastIndex();

  if (lastIndex == nothing) {
    return nothing;
  }

  const removedItems = newArrayData<T>($Model());

  for (let index = lastIndex; index >= 0; index--) {
    const item = this._items[index];

    if (predicate(item, index)) {
      removedItems.addFirstItem(item);
      this._items.splice(index, 1);
    }
  }

  return removedItems;
}
