import {
  $AnalyzerType,
  $ExpressionNode,
  DeclarationSemantic,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  lexicalDebug,
  semantifyIdNode,
  UsageSemantic,
} from '#analyzer';
import {Brand, Nothing, Text, TextRange} from '#core';

export type IdNode = ExpressionNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: UsageSemantic | DeclarationSemantic | Nothing;
    text: Text;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $ExpressionNode());

export function newIdNode(text: Text, range: TextRange): IdNode {
  return {
    $: $IdNode(),
    range,
    text,

    debug: lexicalDebug,
    semantify: semantifyIdNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
