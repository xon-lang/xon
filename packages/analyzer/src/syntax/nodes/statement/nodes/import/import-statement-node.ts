import {
  $AnalyzerType,
  $SyntaxNode,
  AsInfixNode,
  FormatterContext,
  HighlightContext,
  ImportKeywordNode,
  ImportSemantic,
  newSyntaxNode,
  semantifyImportStatementNode,
  StringNode,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type ImportStatementNode = SyntaxNode &
  Brand<'Analyzer.ImportStatementNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | AsInfixNode | Nothing;
    semantic?: ImportSemantic | Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $SyntaxNode());

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
