import {$TextArray, ArrayData, newText, Text, TextArray} from '#common';

export function newTextArray(texts: ArrayData<Text>): TextArray {
  return {
    // todo remove 'as TextArray' operator
    ...(texts as TextArray),

    $: $TextArray,

    join(splitter: Text): Text {
      return newText(this, splitter);
    },
  };
}
