import {
  $AnalyzerType,
  $ExpressionNode,
  DiagnosticContext,
  ExpressionNode,
  FormatterContext,
  GroupNode,
  HighlightContext,
  newSyntaxNode,
  Node,
  SemanticContext,
} from '#analyzer';
import {Brand} from '#typing';

export type InvokeNode = ExpressionNode &
  Brand<'Analyzer.InvokeNode'> & {
    instance: Node;
    group: GroupNode;
  };

export const $InvokeNode = () => $AnalyzerType<InvokeNode>('InvokeNode', $ExpressionNode());

export function invokeNode(instance: Node, group: GroupNode): InvokeNode {
  return newSyntaxNode({
    $: $InvokeNode(),
    canBeExpression: true,
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
