import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Brand} from '#core';

export type UnknownStatementNode = StatementNode & Brand<'Analyzer.UnknownStatementNode'> & {};

export const $UnknownStatementNode = () =>
  $AnalyzerType<UnknownStatementNode>('UnknownStatementNode', $StatementNode());

export function newUnknownStatementNode(): UnknownStatementNode {
  return newSyntaxNode<UnknownStatementNode>({
    $: $UnknownStatementNode(),

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
