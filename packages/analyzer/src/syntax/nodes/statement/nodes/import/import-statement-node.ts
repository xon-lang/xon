import {
  $AnalyzerType,
  $StatementNode,
  diagnoseImportStatementNode,
  ImportKeywordNode,
  newSyntaxNode,
  Node,
  StatementNode,
  StringNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ImportStatementNode = StatementNode &
  Brand<'Analyzer.ImportStatementNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $StatementNode());

export function newImportStatementNode(
  indent: Integer,
  keyword: ImportKeywordNode,
  expression?: StringNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ImportStatementNode {
  return newSyntaxNode<ImportStatementNode>({
    $: $ImportStatementNode(),
    indent,
    keyword,
    expression,
    errorNodes,

    diagnose: diagnoseImportStatementNode,
  });
}
