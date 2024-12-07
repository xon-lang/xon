import {TextData, TextReference} from '#common';
import {$LexicalNode, AT, corePackageType, LexicalNode, lexicalNode} from '#core';

// make syntax node
export type DocumentationLabelNode = LexicalNode & {
  name: TextData;
};

export const $DocumentationLabelNode = corePackageType<DocumentationLabelNode>(
  'DocumentationLabelNode',
  $LexicalNode,
);

export function documentationLabelNode(reference: TextReference, text: TextData): DocumentationLabelNode {
  const name = text.slice(AT.length());

  return lexicalNode({$: $DocumentationLabelNode, reference, text, name});
}
