import {$AnalyzerType, $StatementNode, ElseKeywordNode, newSyntaxNode, Node, StatementNode} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ElseStatementNode = StatementNode &
  Brand<'Analyzer.ElseStatementNode'> & {
    keyword: ElseKeywordNode;
  };

export const $ElseStatementNode = () =>
  $AnalyzerType<ElseStatementNode>('ElseStatementNode', $StatementNode());

export function newElseStatementNode(
  indent: Integer,
  keyword: ElseKeywordNode,
  errorNodes?: ArrayData<Node> | Nothing,
): ElseStatementNode {
  return newSyntaxNode<ElseStatementNode>({
    $: $ElseStatementNode(),
    indent,
    keyword,
    errorNodes,
  });
}
