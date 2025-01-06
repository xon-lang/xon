import {$LexicalNode, analyzerPackageType, AT, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';

// make syntax node
export type DocumentationLabelNode = LexicalNode & {
  name: Text;
};

export const $DocumentationLabelNode = analyzerPackageType<DocumentationLabelNode>(
  'DocumentationLabelNode',
  $LexicalNode,
);

export function documentationLabelNode(reference: TextReference, text: Text): DocumentationLabelNode {
  const name = text.slice(AT.count());

  return lexicalNode({$: $DocumentationLabelNode, reference, text, name});
}
