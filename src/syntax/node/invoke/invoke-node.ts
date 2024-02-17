import { rangeFromNodes } from '../../../source/source-range';
import { Group } from '../group/group-node';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';

export interface InvokeNode extends SyntaxNode {
  $: $Node.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(instance: Node, group: Group): InvokeNode {
  const node: InvokeNode = {
    $: $Node.INVOKE,
    range: rangeFromNodes(instance, group),
    children: [],
    instance,
    group,
  };

  addNodeParent(node, instance, group);

  return node;
}
