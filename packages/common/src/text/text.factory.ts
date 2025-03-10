import {
  $ArrayData,
  $Character,
  $Text,
  $TextRange,
  ArrayData,
  Boolean2,
  Character,
  Integer,
  Nothing,
  Number2,
  Text,
  TextRange,
  newArrayData,
  newCharacter,
  nothing,
  stringToCharArray,
} from '#common';
import {is} from '#typing';

export function newText(strings: ArrayData<Text>, separator?: Text | Nothing): Text;
export function newText(characters: ArrayData<Character>): Text;
export function newText(string: string): Text;
export function newText(): Text;
export function newText(
  value?: string | ArrayData<Character> | ArrayData<Text> | Nothing,
  separator?: Text | Nothing,
): Text {
  let array: ArrayData<Character>;

  if (typeof value === 'string') {
    array = stringToCharArray(value);
  } else if (is(value, $ArrayData<Text>($Text()))) {
    // todo find the best way (join, convert, merge, concat, ....)
    if (separator) {
      array = stringToCharArray(value._items.join(separator.toNativeString()));
    } else {
      array = value.flat();
    }
  } else {
    array = value ?? newArrayData<Character>();
  }

  return {
    ...array,

    $: $Text(),

    slice(rangeOrStartIndex: TextRange | Integer, stopIndex?: Integer | Nothing): Text {
      if (is(rangeOrStartIndex, $TextRange())) {
        const {start, stop} = rangeOrStartIndex;

        return newText(array.slice(start.index, stop.index));
      }

      return newText(array.slice(rangeOrStartIndex, stopIndex));
    },

    lineText(line: Integer): Text {
      const NL = newText('\n');

      if (line === 0) {
        const stopIndex = this.firstItemsIndex(NL);

        if (stopIndex == nothing) {
          return this.clone();
        }

        return this.slice(0, stopIndex);
      }

      let startIndex = 0;
      let lineIndex = 0;

      for (let i = 0; i < this.count(); i++) {
        // todo fix it. NL can be more than one character
        // todo do not use '_string'
        if (NL.equals(this.at2(i))) {
          if (line === lineIndex) {
            return this.slice(startIndex, i);
          }

          startIndex = i + 1;
          lineIndex += 1;
        }
      }

      return newText('');
    },

    split(separator: Text): ArrayData<Text> {
      // todo don't use native split
      return newArrayData(
        this.toNativeString()
          .split(separator.toNativeString())
          .map((x) => newText(x)),
      );
    },

    addFirstItems(items: ArrayData<Character>): Text {
      return newText(array.addFirstItems(items));
    },

    addFirstItem(item: Character): Text {
      return newText(array.addFirstItem(item));
    },

    addLastItems(items: ArrayData<Character>): Text {
      return newText(array.addLastItems(items));
    },

    addLastItem(item: Character): Text {
      return newText(array.addLastItem(item));
    },

    removeFirst(length?: Integer | Nothing): Text {
      return newText(array.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): Text {
      return newText(array.removeLast(length));
    },

    takeWhile(
      predicate: (value: Character, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): Text {
      return newText(array.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): Text {
      return newText(array.take(length, startIndex));
    },

    sort(compareFn?: (a: Character, b: Character) => Number2): Text {
      return newText(array.sort(compareFn));
    },

    sortBy(select: (item: Character) => Number2, ascending?: Boolean2): Text {
      return newText(array.sortBy(select, ascending));
    },

    margin(value: Integer): Text {
      if (this.isEmpty()) {
        return this;
      }

      const lines = this.split(newText('\n')).map((text) => ({
        text,
        padding: text.takeWhile((x) => x.equals(newCharacter(' '))).count(),
      }));

      const minLinePadding = lines.reduce(
        (min, line) => (line.text.count() > 0 ? Math.min(line.padding, min) : min),
        this.count(),
      );

      if (minLinePadding === value) {
        return this;
      }

      const resultLines = lines.map((x) => {
        if (x.text.isEmpty()) {
          return x.text;
        }

        const indent = newText(' ').repeat(x.padding + (value - minLinePadding));

        return indent.addLastItems(x.text.trimStart());
      });

      return newText(resultLines, newText('\n'));
    },

    trim(): Text {
      return newText(this.toNativeString().trim());
    },

    trimStart(): Text {
      return newText(this.toNativeString().trimStart());
    },

    trimEnd(): Text {
      return newText(this.toNativeString().trimEnd());
    },

    startsWith(searchText: Text, startIndex?: Number2 | Nothing): Boolean2 {
      return this.toNativeString().startsWith(searchText.toNativeString(), startIndex ?? undefined);
    },

    endsWith(searchText: Text, startIndex?: Number2 | Nothing): Boolean2 {
      return this.toNativeString().endsWith(searchText.toNativeString(), startIndex ?? undefined);
    },

    repeat(count: Integer): Text {
      return newText(this.toNativeString().repeat(count));
    },

    clone(): Text {
      return newText(array.clone());
    },

    equals(other: Character | ArrayData<Character> | string): Boolean2 {
      if (typeof other === 'string') {
        return this.toNativeString() === other;
      }

      if (is(other, $Character())) {
        return this.toNativeString() === other.toNativeString();
      }

      return this.toNativeString() === other._items.map((x) => x._string).join('');
    },

    toString() {
      return this.toNativeString();
    },

    toNativeString(): string {
      return this._items.map((x) => x.toNativeString()).join('');
    },
  };
}
