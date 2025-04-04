import {
  $AnalyzerType,
  $StatementNode,
  AsInfixNode,
  diagnoseImportStatementNode,
  FormatterContext,
  HighlightContext,
  ImportKeywordNode,
  newSyntaxNode,
  Node,
  semantifyImportStatementNode,
  StatementNode,
  StringNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ImportStatementNode = StatementNode &
  Brand<'Analyzer.ImportStatementNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | AsInfixNode | Nothing;
    semantic?: Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $StatementNode());

export function newImportStatementNode(
  indent: Integer,
  keyword: ImportKeywordNode,
  expression?: StringNode | AsInfixNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ImportStatementNode {
  return newSyntaxNode<ImportStatementNode>({
    $: $ImportStatementNode(),
    indent,
    keyword,
    expression,
    errorNodes,

    semantify: semantifyImportStatementNode,
    diagnose: diagnoseImportStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
