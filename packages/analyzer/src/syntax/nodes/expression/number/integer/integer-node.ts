import {
  $AnalyzerType,
  $NumberNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  IntegerContentNode,
  newSyntaxNode,
  NumberNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type IntegerNode = NumberNode &
  Brand<'Analyzer.IntegerNode'> & {
    contentNode: IntegerContentNode;
  };

export const $IntegerNode = () => $AnalyzerType<IntegerNode>('IntegerNode', $NumberNode());

export function newIntegerNode(contentNode: IntegerContentNode): IntegerNode {
  return newSyntaxNode({
    $: $IntegerNode(),
    canBeExpression: true,
    contentNode,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
