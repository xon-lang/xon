import {TextData, TextReference} from '#/common';
import {LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type DocumentationDescriptionNode = LexicalNode<$.DocumentationDescriptionNode>;

export function documentationDescriptionNode(
  reference: TextReference,
  text: TextData,
): DocumentationDescriptionNode {
  return lexicalNode($.DocumentationDescriptionNode, {reference, text});
}
