import {
  $AnalyzerType,
  $StatementNode,
  diagnoseIfStatementNode,
  IfKeywordNode,
  newSyntaxNode,
  Node,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type IfStatementNode = StatementNode &
  Brand<'Analyzer.IfStatementNode'> & {
    keywordNode: IfKeywordNode;
    conditionExpressionNode?: Node | Nothing;
  };

export const $IfStatementNode = () => $AnalyzerType<IfStatementNode>('IfStatementNode', $StatementNode());

export function newIfStatementNode(
  indentLevel: Integer,
  keywordNode: IfKeywordNode,
  conditionExpressionNode?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): IfStatementNode {
  return newSyntaxNode<IfStatementNode>({
    $: $IfStatementNode(),
    indent: indentLevel,
    keywordNode,
    conditionExpressionNode,
    errorNodes,

    diagnose: diagnoseIfStatementNode,
  });
}
