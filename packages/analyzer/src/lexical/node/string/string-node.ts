import {
  $SyntaxNode2,
  analyzerPackageType,
  rangeFromNodes2,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxNode2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type StringNode = SyntaxNode2 &
  Brand<'Analyzer.StringNode'> & {
    openNode: StringOpenNode;
    contentNode?: StringContentNode | Nothing;
    closeNode?: StringCloseNode | Nothing;
  };

export const $StringNode = analyzerPackageType<StringNode>('StringNode', $SyntaxNode2);

export function newStringNode(
  openNode: StringOpenNode,
  contentNode?: StringContentNode | Nothing,
  closeNode?: StringCloseNode | Nothing,
): StringNode {
  const children = newArrayData([openNode, contentNode, closeNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $StringNode,
    range,
    isExpression: true,
    openNode,
    contentNode,
    closeNode,
    children,
  };
}
