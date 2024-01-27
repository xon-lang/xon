import { Node, SyntaxNode, addNodeParent } from '../../../parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { Group } from '../group/group-node';
import { NodeType } from '../node-type';

export interface InvokeNode extends SyntaxNode {
  $: NodeType.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(instance: Node, group: Group): InvokeNode {
  const node: InvokeNode = {
    $: NodeType.INVOKE,
    range: rangeFromNodes(instance, group),
    children: [],
    instance,
    group,
  };

  addNodeParent(node, instance, group);

  return node;
}
