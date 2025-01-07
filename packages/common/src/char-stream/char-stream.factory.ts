import {$CharStream, ArrayData, Char, CharStream, Nothing} from '#common';

export function charStreamFromArray(chars: ArrayData<Char>): CharStream {
  let index = -1;

  return {
    $: $CharStream,

    next(): Char | Nothing {
      index += 1;

      return chars.at(index);
    },

    previous(): Char | Nothing {
      index -= 1;

      return chars.at(index);
    },
  };
}
