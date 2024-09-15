import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type DocumentationDescriptionNode = LexicalNode<$.DocumentationDescriptionNode>;

export function documentationDescriptionNode(
  reference: TextResourceRange,
  text: TextData,
): DocumentationDescriptionNode {
  return lexicalNode({$: $.DocumentationDescriptionNode, reference, text});
}
