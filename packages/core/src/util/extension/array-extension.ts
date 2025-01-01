import {Boolean2, Integer, Nothing, Number2, String2} from '#common';

Array.prototype.sortStrings = function (): String2[] {
  // todo fix 'as String2[]'
  return (this as String2[]).sort((a, b) => a.localeCompare(b));
};

Array.prototype.filterMap = function <T, V>(
  predicate?: (value: T, index: Integer, array: T[]) => V | Nothing,
): V[] {
  if (!predicate) {
    return this.slice(0);
  }

  const newArray: V[] = [];

  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      newArray.push(result);
    }
  }

  return newArray;
};

Array.prototype.sortBy = function <T>(select: (value: T) => Number2, ascending: Boolean2 = true): T[] {
  if (ascending) {
    return [...this].sort((a, b) => select(a) - select(b));
  }

  return [...this].sort((a, b) => select(b) - select(a));
};

Array.prototype.equals = function <T>(other: T[]): Boolean2 {
  return this.length === other.length && this.every((x, i) => other[i] === x);
};

Array.prototype.toDictionary = function <T, Key extends String2 | Number2>(
  select: (value: T, index: Integer, array: T[]) => Key,
): Record<Key, T> {
  return this.reduce((o: Record<Key, T>, v, i, arr) => {
    o[select(v, i, arr)] = v;

    return o;
  }, {});
};
