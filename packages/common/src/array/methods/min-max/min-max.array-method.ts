import {
  ArrayData,
  ArrayExtremumElement,
  ArraySelect,
  newExtremumArrayElement,
  nothing,
  Nothing,
  Number2,
} from '#common';

type mn<T, V extends Number2> = {
  min: ArrayExtremumElement<T, V> | Nothing;
  max: ArrayExtremumElement<T, V> | Nothing;
};
export function minMaxArrayMethod<T, V extends Number2>(
  this: ArrayData<T>,
  select: ArraySelect<T, V>,
): {min: ArrayExtremumElement<T, V> | Nothing; max: ArrayExtremumElement<T, V> | Nothing} {
  if (this.isEmpty()) {
    return {min: nothing, max: nothing};
  }

  let maxIndex = 0;
  let maxElement = this.at2(maxIndex);
  let maxValue = select(maxElement, maxIndex);

  let minIndex = 0;
  let minElement = this.at2(minIndex);
  let minValue = select(minElement, minIndex);

  if (this.count() === 1) {
    return {
      min: newExtremumArrayElement(minIndex, minElement, minValue),
      max: newExtremumArrayElement(maxIndex, maxElement, maxValue),
    };
  }

  for (let index = 1; index < this.count(); index++) {
    const element = this.at2(index);
    const elementValue = select(this.at2(index), index);

    if (elementValue < minValue) {
      minIndex = index;
      minElement = element;
      minValue = elementValue;
    }

    if (elementValue > minValue) {
      maxIndex = index;
      maxElement = element;
      maxValue = elementValue;
    }
  }

  return {
    min: newExtremumArrayElement(minIndex, minElement, minValue),
    max: newExtremumArrayElement(maxIndex, maxElement, maxValue),
  };
}
