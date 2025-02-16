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
    keywordNode: ImportKeywordNode;
    // todo rename to 'pathNode' or something else
    expressionNode?: StringNode | Nothing;
  };

export const $ImportStatementNode = () =>
  $AnalyzerType<ImportStatementNode>('ImportStatementNode', $StatementNode());

export function newImportStatementNode(
  indent: Integer,
  keywordNode: ImportKeywordNode,
  expressionNode?: Node | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ImportStatementNode {
  return newSyntaxNode<ImportStatementNode>({
    $: $ImportStatementNode(),
    indent,
    keywordNode,
    expressionNode,
    errorNodes,

    diagnose: diagnoseImportStatementNode,
  });
}
