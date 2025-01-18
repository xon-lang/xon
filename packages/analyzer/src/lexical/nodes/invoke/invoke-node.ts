import {
  $SyntaxNode,
  analyzerPackageType,
  GroupNode,
  newSyntaxNode,
  Node,
  SyntaxAnalyzer,
  SyntaxNode2,
} from '#analyzer';
import {Brand} from '#typing';

export type InvokeNode = SyntaxNode2 &
  Brand<'Analyzer.InvokeNode'> & {
    instance: Node;
    group: GroupNode;
  };

export const $InvokeNode = analyzerPackageType<InvokeNode>('InvokeNode', $SyntaxNode);

export function invokeNode(analyzer: SyntaxAnalyzer, instance: Node, group: GroupNode): InvokeNode {
  return newSyntaxNode({$: $InvokeNode, instance, group});

  // format(analyzer, node);

  // return node;
}

// function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
//   analyzer.formatterManager.formatChildNode(node.group, false);
// }
