import {
  $AnalyzerType,
  $ExpressionNode,
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
    target: ExpressionNode;
    group: GroupNode;
  };

export const $InvokeNode = () => $AnalyzerType<InvokeNode>('InvokeNode', $ExpressionNode());

export function invokeNode(target: ExpressionNode, group: GroupNode): InvokeNode {
  return newSyntaxNode({
    $: $InvokeNode(),
    target,
    group,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}

// function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
//   analyzer.formatterManager.formatChildNode(node.group, false);
// }
