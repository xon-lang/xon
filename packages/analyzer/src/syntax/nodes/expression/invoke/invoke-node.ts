import {
  $AnalyzerType,
  $ExpressionNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  GroupNode,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type InvokeNode = ExpressionNode &
  Brand<'Analyzer.InvokeNode'> & {
    instance: ExpressionNode;
    group: GroupNode;
  };

export const $InvokeNode = () => $AnalyzerType<InvokeNode>('InvokeNode', $ExpressionNode());

export function invokeNode(instance: ExpressionNode, group: GroupNode): InvokeNode {
  return newSyntaxNode({
    $: $InvokeNode(),
    instance,
    group,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}

// function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
//   analyzer.formatterManager.formatChildNode(node.group, false);
// }
