import { BodyNode } from '~/analysis/lexical/node/body/body-node';
import { Node, NodeType } from '~/analysis/node';

export interface LadderNode extends Node {
  $: NodeType.LADDER;
  header: Node;
  body: BodyNode;
}

export function ladderNode(header: Node, body: BodyNode): LadderNode {
  return {
    $: NodeType.LADDER,
    start: header.start,
    stop: body.stop,
    header,
    body,
  };
}
