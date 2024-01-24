import { Node } from '../../../parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { Group } from '../group/group-node';
import { NodeType } from '../node-type';

export interface InvokeNode extends Node {
  $: NodeType.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(instance: Node, group: Group): InvokeNode {
  return {
    $: NodeType.INVOKE,
    range: rangeFromNodes(instance, group),
    instance,
    group,
  };
}
