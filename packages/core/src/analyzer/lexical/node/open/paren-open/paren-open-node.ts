import {TextData, TextResourceRange} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type ParenOpenNode = OpenNode<$.ParenOpenNode>;

export function parenOpenNode(reference: TextResourceRange, text: TextData): ParenOpenNode {
  return lexicalNode({$: $.ParenOpenNode, reference, text});
}
