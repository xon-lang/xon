import {
  $AnalyzerType,
  $NumberNode,
  FormatterContext,
  HighlightContext,
  IntegerContentNode,
  newSyntaxNode,
  NumberNode,
  RadixPointNode,
  SemanticContext,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type FloatNode = NumberNode &
  Brand<'Analyzer.FloatNode'> & {
    integer: IntegerContentNode;
    radix?: RadixPointNode | Nothing;
    fraction?: IntegerContentNode | Nothing;
  };

export const $FloatNode = () => $AnalyzerType<FloatNode>('FloatNode', $NumberNode());

export function newFloatNode(
  integer: IntegerContentNode,
  radix?: RadixPointNode | Nothing,
  fraction?: IntegerContentNode | Nothing,
): FloatNode {
  return newSyntaxNode({
    $: $FloatNode(),
    integer,
    radix,
    fraction,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
