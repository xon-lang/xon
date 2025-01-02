import {
  ArrayData,
  ArrayExtremumElement,
  ArraySelect,
  newExtremumArrayElement,
  Nothing,
  nothing,
  Number2,
} from '#common';

export function maxArrayMethod<T, V extends Number2>(
  this: ArrayData<T>,
  select: ArraySelect<T, V>,
): ArrayExtremumElement<T, V> | Nothing {
  if (this.isEmpty()) {
    return nothing;
  }

  let maxIndex = 0;
  let maxElement = this.at2(maxIndex);
  let maxValue = select(maxElement, maxIndex);

  if (this.count() === 1) {
    return newExtremumArrayElement(maxIndex, maxElement, maxValue);
  }

  for (let index = 1; index < this.count(); index++) {
    const element = this.at2(index);
    const elementValue = select(this.at2(index), index);

    if (elementValue > maxValue) {
      maxIndex = index;
      maxElement = element;
      maxValue = elementValue;
    }
  }

  return newExtremumArrayElement(maxIndex, maxElement, maxValue);
}
