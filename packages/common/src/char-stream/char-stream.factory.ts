import {$CharStream, ArrayData, Char, CharStream, Nothing} from '#common';

export function charStreamFromArray(chars: ArrayData<Char>): CharStream {
  return {
    $: $CharStream,
    index: -1,

    next(): Char | Nothing {
      this.index += 1;

      return chars.at(this.index);
    },

    previous(): Char | Nothing {
      this.index -= 1;

      return chars.at(this.index);
    },
  };
}
