import { rangeFromNodes } from '../../../../source/source-range';
import { $Node, Node, addNodeParent } from '../../node';
import { Group } from '../group/group-node';
import { SyntaxNode } from '../syntax-node';

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
