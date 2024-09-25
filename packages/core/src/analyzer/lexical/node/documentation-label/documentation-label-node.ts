import {String2, TextData, TextReference} from '#common';
import {AT, LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

// make syntax node
export type DocumentationLabelNode = LexicalNode<$.DocumentationLabelNode> & {
  name: String2;
};

export function documentationLabelNode(reference: TextReference, text: TextData): DocumentationLabelNode {
  const name = text.slice(AT.length).toString();

  return lexicalNode($.DocumentationLabelNode, {reference, text, name});
}
