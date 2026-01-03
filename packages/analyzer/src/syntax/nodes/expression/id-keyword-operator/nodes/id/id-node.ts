import {
  $AnalyzerType,
  $ExpressionNode,
  $Node,
  DeclarationSemantic,
  ExpressionNode,
  FormatterContext,
  HighlightContext,
  lexicalDebug,
  semantifyIdNode,
  UsageSemantic,
} from '#analyzer';
import {Brand, newArrayData, Nothing, Text, TextRange} from '#core';

export type IdNode = ExpressionNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: UsageSemantic | DeclarationSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $ExpressionNode());

export function newIdNode(text: Text, range: TextRange): IdNode {
  return {
    $: $IdNode(),
    range,
    children: newArrayData($Node()),
    // todo remove 'getText' and use newSyntaxNode
    getText(): Text {
      return text;
    },

    debug: lexicalDebug,
    semantify: semantifyIdNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  };
}
