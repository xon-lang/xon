import {$SyntaxNode, analyzerPackageType, GroupNode, newSyntaxNode, Node2, SyntaxNode2} from '#analyzer';
import {Brand} from '#typing';

export type InvokeNode = SyntaxNode2 &
  Brand<'Analyzer.InvokeNode'> & {
    instance: Node2;
    group: GroupNode;
  };

export const $InvokeNode = analyzerPackageType<InvokeNode>('InvokeNode', $SyntaxNode);

export function invokeNode(instance: Node2, group: GroupNode): InvokeNode {
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
