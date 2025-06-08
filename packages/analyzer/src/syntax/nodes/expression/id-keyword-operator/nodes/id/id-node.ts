import {
  $AnalyzerType,
  $ExpressionNode,
  DeclarationSemantic,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  IdTypeSemantic,
  semantifyIdNode,
} from '#analyzer';
import {Nothing, Text, TextRange} from '#common';
import {Brand} from '#typing';

export type IdNode = ExpressionNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: IdTypeSemantic | DeclarationSemantic | Nothing;
    text: Text;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $ExpressionNode());

export function newIdNode(text: Text, range: TextRange): IdNode {
  return {
    $: $IdNode(),
    range,
    text,

    semantify: semantifyIdNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
