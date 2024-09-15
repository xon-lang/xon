import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type DocumentationOpenNode = LexicalNode<$.DocumentationOpenNode>;

export function documentationOpenNode(reference: TextResourceRange, text: TextData): DocumentationOpenNode {
  return lexicalNode({$: $.DocumentationOpenNode, reference, text});
}
