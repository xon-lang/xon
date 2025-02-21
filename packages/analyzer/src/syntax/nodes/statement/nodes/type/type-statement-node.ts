import {
  $AnalyzerType,
  $StatementNode,
  AngleGroupNode,
  newSyntaxNode,
  Node,
  StatementNode,
  TypeKeywordNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type TypeStatementNode = StatementNode &
  Brand<'Analyzer.TypeStatementNode'> & {
    keyword: TypeKeywordNode;
    id?: Node | Nothing;
    parameters?: AngleGroupNode | Nothing;
  };

export const $TypeStatementNode = () =>
  $AnalyzerType<TypeStatementNode>('TypeStatementNode', $StatementNode());

export function newTypeStatementNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  errorNodes?: ArrayData<Node> | Nothing,
): TypeStatementNode {
  return newSyntaxNode<TypeStatementNode>({
    $: $TypeStatementNode(),
    indent,
    keyword: keyword,
    errorNodes,
  });
}
