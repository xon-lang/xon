import {
  $ArrayData,
  $Char,
  $Text,
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

const NL = newText('\n');

// todo rename to newText
export function newText(strings: ArrayData<Text>, separator?: Text | Nothing): Text;
export function newText(characters: ArrayData<Char>): Text;
export function newText(string: String2): Text;
export function newText(): Text;
export function newText(
  value?: String2 | ArrayData<Char> | ArrayData<Text> | Nothing,
  separator?: Text | Nothing,
): Text {
  let array: ArrayData<Char>;

  if (typeof value === 'string') {
    array = stringToCharArray(value);
  } else if (is(value, $ArrayData<Text>($Text))) {
    // todo find the best way (join, convert, merge, concat, ....)
    if (separator) {
      array = stringToCharArray(value._items.join(separator.toNativeString()));
    } else {
      array = value.flat();
    }
  } else {
    array = value ?? newArrayData<Char>();
  }

  return {
    ...array,

    $: $Text,

    slice(rangeOrStartIndex: TextRange | Integer, stopIndex?: Integer | Nothing): Text {
      if (is(rangeOrStartIndex, $TextRange)) {
        const {start, stop} = rangeOrStartIndex;

        return newText(array.slice(start.index, stop.index));
      }

      return newText(array.slice(rangeOrStartIndex, stopIndex));
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

      return newText('');
    },

    addFirstItems(items: ArrayData<Char>): Text {
      return newText(array.addFirstItems(items));
    },

    addFirstItem(item: Char): Text {
      return newText(array.addFirstItem(item));
    },

    addLastItems(items: ArrayData<Char>): Text {
      return newText(array.addLastItems(items));
    },

    addLastItem(item: Char): Text {
      return newText(array.addLastItem(item));
    },

    removeFirst(length?: Integer | Nothing): Text {
      return newText(array.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): Text {
      return newText(array.removeLast(length));
    },

    takeWhile(
      predicate?: (value: Char, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): Text {
      return newText(array.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): Text {
      return newText(array.take(length, startIndex));
    },

    sort(compareFn?: (a: Char, b: Char) => Number2): Text {
      return newText(array.sort(compareFn));
    },

    sortBy(select: (item: Char) => Number2, ascending?: Boolean2): Text {
      return newText(array.sortBy(select, ascending));
    },

    setPadding(padding: Integer): Text {
      return newText(this.toNativeString().setPadding(padding));
    },

    trim(): Text {
      return newText(this.toNativeString().trim());
    },

    repeat(count: Integer): Text {
      return newText(this.toNativeString().repeat(count));
    },

    clone(): Text {
      return newText(array.clone());
    },

    equals(other: Text | ArrayData<Char> | String2): Boolean2 {
      if (typeof other === 'string') {
        return this.toNativeString() === other;
      }

      if (Array.isArray(other)) {
        return this.toNativeString() === other.join('');
      }

      if (is(other, $Text)) {
        return this.toNativeString() === other.toNativeString();
      }

      if (is(other, $ArrayData($Char))) {
        return this.toNativeString() === other._items.join('');
      }

      return false;
    },

    toString() {
      return this.toNativeString();
    },

    toNativeString(): String2 {
      return this._items.map((x) => x.toNativeString()).join('');
    },
  };
}
