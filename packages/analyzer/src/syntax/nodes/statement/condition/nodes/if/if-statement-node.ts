import {
  $StatementNode2,
  IfKeywordNode,
  Node,
  StatementNode2,
  analyzerPackageType,
  diagnoseIfStatementNode,
  newSyntaxNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type IfStatementNode = StatementNode2 &
  Brand<'Analyzer.IfStatementNode'> & {
    keywordNode: IfKeywordNode;
    conditionExpressionNode?: Node | Nothing;
  };

export const $IfStatementNode = analyzerPackageType<IfStatementNode>('IfStatementNode', $StatementNode2);

export function newIfStatementNode(
  indentLevel: Integer,
  keywordNode: IfKeywordNode,
  conditionExpressionNode?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): IfStatementNode {
  return newSyntaxNode<IfStatementNode>({
    $: $IfStatementNode,
    indent: indentLevel,
    keywordNode,
    conditionExpressionNode,
    errorNodes,

    diagnose: diagnoseIfStatementNode,
  });
}
