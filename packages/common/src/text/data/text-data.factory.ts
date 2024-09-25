import {Boolean2, Char, Integer, String2, stringToCharacters, TextData, TextRange} from '#common';
import {NL, Predicate} from '#core';
import {$, is} from '#typing';

export function textData(characters: Char[]): TextData;
export function textData(string: String2): TextData;
export function textData(stringOrCharacters: String2 | Char[]): TextData {
  const characters =
    typeof stringOrCharacters === 'string' ? stringToCharacters(stringOrCharacters) : stringOrCharacters;

  return {
    // ...array,
    characters,
    $: $.TextData,

    slice(rangeOrStartIndex?: TextRange | Integer, stopIndex?: Integer): TextData {
      if (is(rangeOrStartIndex, $.TextRange)) {
        const {start, stop} = rangeOrStartIndex;

        return textData(this.characters.slice(start.index, stop.index));
      }

      return textData(this.characters.slice(rangeOrStartIndex, stopIndex));
    },

    lineText(line: Integer): TextData {
      if (line === 0) {
        const stopIndex = this.firstIndex(NL);

        if (stopIndex < 0) {
          return this.clone();
        }

        return (this as TextData).slice(0, stopIndex);
      }

      let startIndex = 0;
      let lineIndex = 0;

      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i] === NL) {
          if (line === lineIndex) {
            return this.slice(startIndex, i);
          }

          startIndex = i + 1;
          lineIndex += 1;
        }
      }

      return textData([]);
    },

    firstIndex(data: Char[] | String2 | TextData, startIndex?: Integer): Integer {
      if (Array.isArray(data)) {
        return this.characters.firstIndex((_, i, arr) => data.every((z, j) => z === arr[i + j]), startIndex);
      }

      if (typeof data === 'string') {
        return this.firstIndex(stringToCharacters(data), startIndex);
      }

      return this.firstIndex(data.characters, startIndex);
    },

    lastIndex(data: Char[] | String2 | TextData, startIndex?: Integer): Integer {
      if (Array.isArray(data)) {
        return this.characters.lastIndex((_, i, arr) => data.every((z, j) => z === arr[i + j]), startIndex);
      }

      if (typeof data === 'string') {
        return this.lastIndex(stringToCharacters(data), startIndex);
      }

      return this.lastIndex(data.characters, startIndex);
    },

    takeWhile(predicate?: Predicate<Char>, startIndex?: Integer, includeConditionItem?: Boolean2): TextData {
      const characters = this.characters.takeWhile(predicate, startIndex, includeConditionItem);

      return textData(characters);
    },

    take(length: Integer, startIndex?: Integer): TextData {
      const characters = this.characters.take(length, startIndex);

      return textData(characters);
    },

    append(stringOrCharacters: String2 | String2[]): TextData {
      if (Array.isArray(stringOrCharacters)) {
        this.characters.push(...stringOrCharacters);
      } else {
        this.characters.push(...stringToCharacters(stringOrCharacters));
      }

      return this;
    },

    prepend(stringOrCharacters: String2 | String2[]): TextData {
      if (Array.isArray(stringOrCharacters)) {
        this.characters.unshift(...stringOrCharacters);
      } else {
        this.characters.unshift(...stringToCharacters(stringOrCharacters));
      }

      return this;
    },

    clone(): TextData {
      return textData(this.characters);
    },

    length(): Integer {
      return this.characters.length;
    },

    equals(other: String2 | TextData): Boolean2 {
      if (typeof other === 'string') {
        return this.characters.join('') === other;
      }

      return this.characters.equals(other.characters);
    },

    toString(): String2 {
      return characters.join('');
    },
  };
}
