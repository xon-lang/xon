import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(reference: TextResourceRange, text: TextData): DocumentationOpenNode {
  return lexicalNode({$: $.DocumentationOpenNode, reference, text});
}
