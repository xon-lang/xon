import {String2, TextData, TextResourceRange} from '#common';
import {AT, LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type DocumentationLabelNode = LexicalNode<$.DocumentationLabelNode> & {
  name: String2;
};

export function documentationLabelNode(reference: TextResourceRange, text: TextData): DocumentationLabelNode {
  const name = text.slice(AT.length).toString();

  return lexicalNode({$: $.DocumentationLabelNode, reference, text, name});
}
