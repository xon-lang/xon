import {ArrayData, Integer, newArrayData} from '#common';
import {$Model} from '#typing';

export function replaceItemsArrayMethod<T>(
  this: ArrayData<T>,
  startIndex: Integer,
  deleteCount: Integer,
  newItems: ArrayData<T>,
): ArrayData<T> {
  const items = [...this._items];
  items.splice(startIndex, deleteCount, ...newItems._items);

  return newArrayData($Model(), items);
}
