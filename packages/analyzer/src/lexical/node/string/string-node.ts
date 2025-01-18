import {
  $SyntaxNode2,
  analyzerPackageType,
  diagnoseStringNode,
  formatStringNode,
  newSyntaxNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
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
  return newSyntaxNode({
    $: $StringNode,
    openNode,
    contentNode,
    closeNode,

    diagnose: diagnoseStringNode,
    format: formatStringNode,
  });
}
