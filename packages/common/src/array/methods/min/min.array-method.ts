import {
  ArrayData,
  ArrayExtremumElement,
  ArraySelect,
  newExtremumArrayElement,
  Nothing,
  nothing,
  Number2,
} from '#common';

export function minArrayMethod<T, V extends Number2>(
  this: ArrayData<T>,
  select: ArraySelect<T, V>,
): ArrayExtremumElement<T, V> | Nothing {
  if (this.isEmpty()) {
    return nothing;
  }

  let minIndex = 0;
  let minElement = this.at2(minIndex);
  let minValue = select(minElement, minIndex);

  if (this.length() === 1) {
    return newExtremumArrayElement(minIndex, minElement, minValue);
  }

  for (let index = 1; index < this.length(); index++) {
    const element = this.at2(index);
    const elementValue = select(this.at2(index), index);

    if (elementValue < minValue) {
      minIndex = index;
      minElement = element;
      minValue = elementValue;
    }
  }

  return newExtremumArrayElement(minIndex, minElement, minValue);
}
