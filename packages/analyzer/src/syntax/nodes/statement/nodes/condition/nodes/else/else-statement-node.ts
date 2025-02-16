import {$AnalyzerType, $StatementNode, ElseKeywordNode, newSyntaxNode, Node, StatementNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ElseStatementNode = StatementNode &
  Brand<'Analyzer.ElseStatementNode'> & {
    keywordNode: ElseKeywordNode;
  };

export const $ElseStatementNode = () =>
  $AnalyzerType<ElseStatementNode>('ElseStatementNode', $StatementNode());

export function newElseStatementNode(
  indentLevel: Integer,
  keywordNode: ElseKeywordNode,
  errorNodes?: ArrayData<Node> | Nothing,
): ElseStatementNode {
  return newSyntaxNode<ElseStatementNode>({
    $: $ElseStatementNode(),
    indent: indentLevel,
    keywordNode,
    errorNodes,
  });
}
