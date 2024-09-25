import {Anything, String2, TextData} from '#common';
import {Node} from '#core';
import {$} from '#typing';

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: TextData;
};

type RequiredFields<T> = Omit<T, 'equals' | '$'>;

export function lexicalNode<T extends $, V >(
  $: T,
  params: V,
) {
  return {
    ...params,

    $,
    // equals(other: LexicalNode): Boolean2 {
    //   return this.reference.equals(other.reference);
    // },
  };
}
