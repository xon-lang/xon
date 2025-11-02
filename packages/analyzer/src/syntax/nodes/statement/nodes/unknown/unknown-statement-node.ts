import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Integer} from '#core';
import {Brand} from '#typing';

export type UnknownStatementNode = StatementNode & Brand<'Analyzer.UnknownStatementNode'> & {};

export const $UnknownStatementNode = () =>
  $AnalyzerType<UnknownStatementNode>('UnknownStatementNode', $StatementNode());

export function newUnknownStatementNode(indent: Integer): UnknownStatementNode {
  return newSyntaxNode<UnknownStatementNode>({
    $: $UnknownStatementNode(),
    indent,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
