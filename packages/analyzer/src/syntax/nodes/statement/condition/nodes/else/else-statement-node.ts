import {
  $StatementNode2,
  ElseKeywordNode,
  Node,
  StatementNode2,
  analyzerPackageType,
  newSyntaxNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ElseStatementNode = StatementNode2 &
  Brand<'Analyzer.ElseStatementNode'> & {
    keywordNode: ElseKeywordNode;
  };

export const $ElseStatementNode = analyzerPackageType<ElseStatementNode>(
  'ElseStatementNode',
  $StatementNode2,
);

export function newElseStatementNode(
  indentLevel: Integer,
  keywordNode: ElseKeywordNode,
  errorNodes?: ArrayData<Node> | Nothing,
): ElseStatementNode {
  return newSyntaxNode<ElseStatementNode>({
    $: $ElseStatementNode,
    indent: indentLevel,
    keywordNode,
    errorNodes,
  });
}
