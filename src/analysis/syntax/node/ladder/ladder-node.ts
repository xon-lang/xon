import { Node, NodeType } from '~/analysis/node';
import { BodyNode } from '~/analysis/syntax/node/body/body-node';

export interface LadderNode extends Node {
  type: NodeType.LADDER;
  header: Node;
  body: BodyNode;
}

export function ladderNode(header: Node, body: BodyNode): LadderNode {
  return {
    type: NodeType.LADDER,
    header,
    body,
  };
}
