import {$Model, ArrayData, Integer, newArrayData} from '#core';

export function replaceItemArrayMethod<T>(
  this: ArrayData<T>,
  startIndex: Integer,
  deleteCount: Integer,
  newItem: T,
): ArrayData<T> {
  const items = [...this._items];
  items.splice(startIndex, deleteCount, newItem);

  return newArrayData($Model(), items);
}
