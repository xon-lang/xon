import {ArrayData, Integer, newArrayData} from '#common';

export function replaceArrayMethod<T>(
  this: ArrayData<T>,
  startIndex: Integer,
  deleteCount: Integer,
  newItems: ArrayData<T>,
): ArrayData<T> {
  const items = [...this._items];
  items.splice(startIndex, deleteCount, ...newItems._items);

  return newArrayData(items);
}
