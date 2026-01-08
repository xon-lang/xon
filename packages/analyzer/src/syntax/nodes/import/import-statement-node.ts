import {
  $AnalyzerType,
  $SyntaxNode,
  AsInfixNode,
  ImportKeywordNode,
  ImportSemantic,
  newSyntaxNode,
  semantifyImportStatementNode,
  StringNode,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type ImportNode = SyntaxNode &
  Brand<'Analyzer.ImportNode'> & {
    keyword: ImportKeywordNode;
    expression?: StringNode | AsInfixNode | Nothing;
    semantic?: ImportSemantic | Nothing;
  };

export const $ImportNode = () => $AnalyzerType<ImportNode>('ImportNode', $SyntaxNode());

export function newImportNode(
  keyword: ImportKeywordNode,
  expression?: StringNode | AsInfixNode | Nothing,
): ImportNode {
  return newSyntaxNode<ImportNode>({
    $: $ImportNode(),
    keyword,
    expression,

    semantify: semantifyImportStatementNode,
  });
}
