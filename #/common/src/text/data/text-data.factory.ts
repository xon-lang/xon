import {
  $ArrayData,
  $CharData,
  $TextData,
  $TextRange,
  ArrayData,
  Boolean2,
  Char,
  CharData,
  Integer,
  is_v2,
  newArrayData,
  Nothing,
  Number2,
  String2,
  stringToCharDataArray,
  TextData,
  TextRange,
} from '#common';

const NL = newTextData('\n');

export function newTextData(characters: ArrayData<CharData>): TextData;
export function newTextData(string: String2): TextData;
export function newTextData(): TextData;
export function newTextData(stringOrCharacters?: String2 | ArrayData<CharData>): TextData {
  const array = stringOrCharacters
    ? typeof stringOrCharacters === 'string'
      ? stringToCharDataArray(stringOrCharacters)
      : stringOrCharacters
    : newArrayData<CharData>();

  return {
    ...array,

    $: $TextData,

    slice(rangeOrStartIndex: TextRange | Integer, stopIndex?: Integer | Nothing): TextData {
      if (is_v2(rangeOrStartIndex, $TextRange)) {
        const {start, stop} = rangeOrStartIndex;

        return newTextData(array.slice(start.index, stop.index));
      }

      return newTextData(array.slice(rangeOrStartIndex, stopIndex));
    },

    lineText(line: Integer): TextData {
      if (line === 0) {
        const stopIndex = this.firstItemsIndex(NL);

        if (stopIndex < 0) {
          return this.clone();
        }

        return (this as TextData).slice(0, stopIndex);
      }

      let startIndex = 0;
      let lineIndex = 0;

      for (let i = 0; i < this.length(); i++) {
        // todo fix it. NL can be more than one character
        // todo do not use '_string'
        if (this.at2(i).equals(NL)) {
          if (line === lineIndex) {
            return this.slice(startIndex, i);
          }

          startIndex = i + 1;
          lineIndex += 1;
        }
      }

      return newTextData('');
    },

    addFirst(...items: CharData[]): TextData {
      return newTextData(array.addFirst(...items));
    },

    addLast(...items: CharData[]): TextData {
      return newTextData(array.addLast(...items));
    },

    removeFirst(length?: Integer | Nothing): TextData {
      return newTextData(array.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): TextData {
      return newTextData(array.removeLast(length));
    },

    takeWhile(
      predicate?: (value: CharData, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): TextData {
      return newTextData(array.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): TextData {
      return newTextData(array.take(length, startIndex));
    },

    sort(compareFn?: (a: CharData, b: CharData) => Number2): TextData {
      return newTextData(array.sort(compareFn));
    },

    sortBy(select: (item: CharData) => Number2, ascending?: Boolean2): TextData {
      return newTextData(array.sortBy(select, ascending));
    },

    setPadding(padding: Integer): TextData {
      return newTextData(this.toString().setPadding(padding));
    },

    trim(): TextData {
      return newTextData(this.toString().trim());
    },

    repeat(count: Integer): TextData {
      return newTextData(this.toString().repeat(count));
    },

    clone(): TextData {
      return newTextData(array.clone());
    },

    equals(other: TextData | ArrayData<CharData> | String2 | Char[]): Boolean2 {
      if (typeof other === 'string') {
        return this.toString() === other;
      }

      if (Array.isArray(other)) {
        return this.toString() === other.join('');
      }

      if (is_v2(other, $TextData)) {
        return this.toString() === other.toString();
      }

      if (is_v2(other, $ArrayData($CharData))) {
        return this.toString() === other._items.join('');
      }

      return false;
    },

    toString(): String2 {
      return this._items.join('');
    },
  };
}
