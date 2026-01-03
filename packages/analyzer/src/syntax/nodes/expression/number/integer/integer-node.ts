import {
  $AnalyzerType,
  $NumberNode,
  FormatterContext,
  HighlightContext,
  IntegerContentNode,
  newSyntaxNode,
  NumberNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#core';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    content: IntegerContentNode;
  };

export const $IntegerNode = () => $AnalyzerType<IntegerNode>('IntegerNode', $NumberNode());

export function newIntegerNode(content: IntegerContentNode): IntegerNode {
  return newSyntaxNode({
    $: $IntegerNode(),
    content,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
