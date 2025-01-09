import {
  $SyntaxNode2,
  analyzerPackageType,
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  rangeFromNodes2,
  SyntaxNode2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
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
  const children = newArrayData([openNode, contentNode, closeNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $CharNode,
    range,
    isExpression: true,
    openNode,
    contentNode,
    closeNode,
    children,
  };
}
