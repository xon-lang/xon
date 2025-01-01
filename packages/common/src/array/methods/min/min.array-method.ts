import {ArrayData, Integer, Nothing, nothing, Number2} from '#common';

export function minArrayMethod<T>(
  this: ArrayData<T>,
  select: (value: T, index: Integer, array: ArrayData<T>) => Number2,
): T | Nothing {
  if (this.isEmpty()) {
    return nothing;
  }

  if (this.length() === 1) {
    return this.at(0);
  }

  let minElement = this.at(0);
  let minValue = Number.MAX_VALUE;

  for (let index = 1; index < this.length(); index++) {
    const element = this.at2(index);
    const elementValue = select(this.at2(index), index, this);

    if (elementValue < minValue) {
      minElement = element;
      minValue = elementValue;
    }
  }
}
