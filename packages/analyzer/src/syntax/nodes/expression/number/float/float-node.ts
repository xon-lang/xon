import {
  $AnalyzerType,
  $NumberNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  IntegerContentNode,
  newSyntaxNode,
  NumberNode,
  RadixPointNode,
  SemanticContext,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type FloatNode = NumberNode &
  Brand<'Analyzer.FloatNode'> & {
    integer: IntegerContentNode;
    radixPoint?: RadixPointNode | Nothing;
    fraction?: IntegerContentNode | Nothing;
  };

export const $FloatNode = () => $AnalyzerType<FloatNode>('FloatNode', $NumberNode());

export function newFloatNode(
  integer: IntegerContentNode,
  radixPoint?: RadixPointNode | Nothing,
  fraction?: IntegerContentNode | Nothing,
): FloatNode {
  return newSyntaxNode({
    $: $FloatNode(),
    canBeExpression: true,
    integer,
    radixPoint,
    fraction,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
