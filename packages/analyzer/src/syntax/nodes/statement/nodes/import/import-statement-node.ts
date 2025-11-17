import {
  $AnalyzerType,
  $StatementNode,
  AsInfixNode,
  FormatterContext,
  HighlightContext,
  ImportKeywordNode,
  ImportSemantic,
  newSyntaxNode,
  semantifyImportStatementNode,
  StatementNode,
  StringNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type ImportStatementNode = StatementNode &
  Brand<'Analyzer.ImportStatementNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | AsInfixNode | Nothing;
    semantic?: ImportSemantic | Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $StatementNode());

export function newImportStatementNode(
  keyword: ImportKeywordNode,
  expression?: StringNode | AsInfixNode | Nothing,
): ImportStatementNode {
  return newSyntaxNode<ImportStatementNode>({
    $: $ImportStatementNode(),
    keyword,
    expression,

    semantify: semantifyImportStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
