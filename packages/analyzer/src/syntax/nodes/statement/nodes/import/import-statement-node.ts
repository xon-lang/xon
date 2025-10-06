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
import {Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ImportStatementNode = StatementNode &
  Brand<'Analyzer.ImportStatementNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | AsInfixNode | Nothing;
    semantic?: ImportSemantic | Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $StatementNode());

export function newImportStatementNode(
  indent: Integer,
  keyword: ImportKeywordNode,
  expression?: StringNode | AsInfixNode | Nothing,
): ImportStatementNode {
  return newSyntaxNode<ImportStatementNode>({
    $: $ImportStatementNode(),
    indent,
    keyword,
    expression,

    semantify: semantifyImportStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
