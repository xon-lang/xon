import {Anything, String2, TextData} from '#common';
import {Node} from '#core';
import {$} from '#typing';

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: TextData;
};

export function lexicalNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
