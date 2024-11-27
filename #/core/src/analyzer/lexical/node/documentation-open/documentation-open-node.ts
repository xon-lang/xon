import {TextData, TextReference} from '#/common';
import {LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(reference: TextReference, text: TextData): DocumentationOpenNode {
  return lexicalNode($.DocumentationOpenNode, {reference, text});
}
