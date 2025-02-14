import {$SyntaxNode, analyzerPackageType, GroupNode, newSyntaxNode, Node, SyntaxNode} from '#analyzer';
import {Brand} from '#typing';

export type InvokeNode = SyntaxNode &
  Brand<'Analyzer.InvokeNode'> & {
    instance: Node;
    group: GroupNode;
  };

export const $InvokeNode = analyzerPackageType<InvokeNode>('InvokeNode', $SyntaxNode);

export function invokeNode(instance: Node, group: GroupNode): InvokeNode {
  return newSyntaxNode({
    $: $InvokeNode,
    canBeExpression: true,
    instance,
    group,
  });
}

// function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
//   analyzer.formatterManager.formatChildNode(node.group, false);
// }
