import {
  $ArrayData,
  $Char,
  $TextData,
  $TextRange,
  ArrayData,
  Boolean2,
  Char,
  Integer,
  Nothing,
  Number2,
  String2,
  Text,
  TextRange,
  newArrayData,
  stringToCharArray,
} from '#common';
import {is} from '#typing';

const NL = newTextData('\n');

export function newTextData(characters: ArrayData<Char>): Text;
export function newTextData(string: String2): Text;
export function newTextData(): Text;
export function newTextData(stringOrCharacters?: String2 | ArrayData<Char>): Text {
  const array = stringOrCharacters
    ? typeof stringOrCharacters === 'string'
      ? stringToCharArray(stringOrCharacters)
      : stringOrCharacters
    : newArrayData<Char>();

  return {
    ...array,

    $: $TextData,

    slice(rangeOrStartIndex: TextRange | Integer, stopIndex?: Integer | Nothing): Text {
      if (is(rangeOrStartIndex, $TextRange)) {
        const {start, stop} = rangeOrStartIndex;

        return newTextData(array.slice(start.index, stop.index));
      }

      return newTextData(array.slice(rangeOrStartIndex, stopIndex));
    },

    lineText(line: Integer): Text {
      if (line === 0) {
        const stopIndex = this.firstItemsIndex(NL);

        if (stopIndex < 0) {
          return this.clone();
        }

        return (this as Text).slice(0, stopIndex);
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

    addFirst(...items: Char[]): Text {
      return newTextData(array.addFirst(...items));
    },

    addLast(...items: Char[]): Text {
      return newTextData(array.addLast(...items));
    },

    removeFirst(length?: Integer | Nothing): Text {
      return newTextData(array.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): Text {
      return newTextData(array.removeLast(length));
    },

    takeWhile(
      predicate?: (value: Char, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): Text {
      return newTextData(array.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): Text {
      return newTextData(array.take(length, startIndex));
    },

    sort(compareFn?: (a: Char, b: Char) => Number2): Text {
      return newTextData(array.sort(compareFn));
    },

    sortBy(select: (item: Char) => Number2, ascending?: Boolean2): Text {
      return newTextData(array.sortBy(select, ascending));
    },

    setPadding(padding: Integer): Text {
      return newTextData(this.toString().setPadding(padding));
    },

    trim(): Text {
      return newTextData(this.toString().trim());
    },

    repeat(count: Integer): Text {
      return newTextData(this.toString().repeat(count));
    },

    clone(): Text {
      return newTextData(array.clone());
    },

    equals(other: Text | ArrayData<Char> | String2): Boolean2 {
      if (typeof other === 'string') {
        return this.toString() === other;
      }

      if (Array.isArray(other)) {
        return this.toString() === other.join('');
      }

      if (is(other, $TextData)) {
        return this.toString() === other.toString();
      }

      if (is(other, $ArrayData($Char))) {
        return this.toString() === other._items.join('');
      }

      return false;
    },

    toString(): String2 {
      return this._items.join('');
    },
  };
}
