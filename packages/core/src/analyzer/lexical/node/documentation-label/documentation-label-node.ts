import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

// todo make syntax node
export type DocumentationLabelNode = LexicalNode<$.DocumentationLabelNode> & {};

export function documentationLabelNode(reference: TextReference, text: TextData): DocumentationLabelNode {
  return lexicalNode($.DocumentationLabelNode, {reference, text});
}
