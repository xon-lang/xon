import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type UnknownStatementNode = StatementNode & Brand<'Analyzer.UnknownStatementNode'> & {};

export const $UnknownStatementNode = () =>
  $AnalyzerType<UnknownStatementNode>('UnknownStatementNode', $StatementNode());

export function newUnknownStatementNode(
  indent: Integer,
  errorNodes?: ArrayData<Node> | Nothing,
): UnknownStatementNode {
  return newSyntaxNode<UnknownStatementNode>({
    $: $UnknownStatementNode(),
    indent,
    errorNodes,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
