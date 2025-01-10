import {
  $SyntaxNode2,
  analyzerPackageType,
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharNode = SyntaxNode2 &
  Brand<'Analyzer.CharNode'> & {
    openNode: CharOpenNode;
    contentNode?: CharContentNode | Nothing;
    closeNode?: CharCloseNode | Nothing;
  };

export const $CharNode = analyzerPackageType<CharNode>('CharNode', $SyntaxNode2);

export function newCharNode(
  openNode: CharOpenNode,
  contentNode?: CharContentNode | Nothing,
  closeNode?: CharCloseNode | Nothing,
): CharNode {
  return newSyntaxNode({$: $CharNode, isExpression: true, openNode, contentNode, closeNode});
}
