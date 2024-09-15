import {String2} from '#common';
import {$, AT, LexicalNode, lexicalNode, TextData, TextResourceRange} from '#core';

export type DocumentationLabelNode = LexicalNode<$.DocumentationLabelNode> & {
  name: String2;
};

export function documentationLabelNode(reference: TextResourceRange, text: TextData): DocumentationLabelNode {
  const name = text.slice(AT.length).toString();

  return lexicalNode({$: $.DocumentationLabelNode, reference, text, name});
}
