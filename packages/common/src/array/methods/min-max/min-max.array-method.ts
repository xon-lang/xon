import {ArrayData, ArraySelect, Nothing, nothing, Number2} from '#common';

export function minMaxArrayMethod<T>(
  this: ArrayData<T>,
  select: ArraySelect<T, Number2>,
): {min: T | Nothing; max: T | Nothing} {
  const array: ArrayData<T> = this;

  if (this.isEmpty()) {
    return {min: nothing, max: nothing};
  }

  if (this.length() === 1) {
    return {min: this.at2(0), max: this.at2(0)};
  }

  let min = this.at2(0);
  let max = this.at2(0);

  for (let i = 1; i < array.length(); i++) {
    const item = this.at2(i);

    const value = select(item, i);
    const minValue = select(min, i);
    const maxValue = select(max, i);

    if (value > maxValue) {
      max = item;
    }

    if (value < minValue) {
      min = item;
    }
  }

  return {min, max};
}
