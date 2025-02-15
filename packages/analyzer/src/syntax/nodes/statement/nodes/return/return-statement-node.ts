import {
  $StatementNode,
  Node,
  ReturnKeywordNode,
  StatementNode,
  analyzerPackageType,
  diagnoseReturnStatementNode,
  newSyntaxNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ReturnStatementNode = StatementNode &
  Brand<'Analyzer.ReturnStatementNode'> & {
    keywordNode: ReturnKeywordNode;
    expressionNode?: Node | Nothing;
  };

export const $ReturnStatementNode = analyzerPackageType<ReturnStatementNode>(
  'ReturnStatementNode',
  $StatementNode,
);

export function newReturnStatementNode(
  indent: Integer,
  keywordNode: ReturnKeywordNode,
  expressionNode?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ReturnStatementNode {
  return newSyntaxNode<ReturnStatementNode>({
    $: $ReturnStatementNode,
    indent,
    keywordNode,
    expressionNode,
    errorNodes,

    diagnose: diagnoseReturnStatementNode,
  });
}
