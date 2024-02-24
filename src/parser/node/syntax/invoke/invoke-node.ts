import { $Node, Node } from '../../node';
import { Group } from '../group/group-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface InvokeNode extends SyntaxNode {
  $: $Node.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(instance: Node, group: Group): InvokeNode {
  const node: InvokeNode = {
    $: $Node.INVOKE,
    ...getRangeAndChildren(instance, group),
    instance,
    group,
  };

  return node;
}
