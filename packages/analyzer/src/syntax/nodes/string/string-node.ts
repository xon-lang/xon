import {
  $AnalyzerType,
  $SyntaxNode,
  diagnoseStringNode,
  formatStringNode,
  newSyntaxNode,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type StringNode = SyntaxNode &
  Brand<'Analyzer.StringNode'> & {
    openNode: StringOpenNode;
    contentNode?: StringContentNode | Nothing;
    closeNode?: StringCloseNode | Nothing;
  };

export const $StringNode = () => $AnalyzerType<StringNode>('StringNode', $SyntaxNode());

export function newStringNode(
  openNode: StringOpenNode,
  contentNode?: StringContentNode | Nothing,
  closeNode?: StringCloseNode | Nothing,
): StringNode {
  return newSyntaxNode({
    $: $StringNode(),
    canBeExpression: true,
    openNode,
    contentNode,
    closeNode,

    diagnose: diagnoseStringNode,
    format: formatStringNode,
  });
}
