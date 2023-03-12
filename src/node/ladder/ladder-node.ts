import { BodyNode } from '~/node/body/body-node';
import { Node, NodeType } from '~/node/node';

export interface LadderNode extends Node {
  header: Node;
  body: BodyNode;
}

export function ladderNode(header: Node, body: BodyNode): LadderNode {
  return {
    nodeType: NodeType.LADDER,
    startIndex: header.startIndex,
    stopIndex: body.stopIndex,
    text: header.text + body.text,
    header,
    body,
  };
}
