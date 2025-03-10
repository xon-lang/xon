import {
  $AnalyzerType,
  $StatementNode,
  diagnoseReturnStatementNode,
  newSyntaxNode,
  Node,
  ReturnKeywordNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ReturnStatementNode = StatementNode &
  Brand<'Analyzer.ReturnStatementNode'> & {
    keyword: ReturnKeywordNode;
    expression?: Node | Nothing;
  };

export const $ReturnStatementNode = () =>
  $AnalyzerType<ReturnStatementNode>('ReturnStatementNode', $StatementNode());

export function newReturnStatementNode(
  indent: Integer,
  keyword: ReturnKeywordNode,
  expression?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ReturnStatementNode {
  return newSyntaxNode<ReturnStatementNode>({
    $: $ReturnStatementNode(),
    indent,
    keyword,
    expression,
    errorNodes,

    diagnose: diagnoseReturnStatementNode,
  });
}
