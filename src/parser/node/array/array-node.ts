import '~/extensions';
import { BodyNode } from '~/parser/node/body/body-node';
import { CloseNode } from '~/parser/node/close/close-node';
import { OpenNode } from '~/parser/node/open/open-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const ARRAY_NODE_OPEN = '[';
export const ARRAY_NODE_CLOSE = ']';

export interface ArrayNode extends Node {
  $: NodeType.ARRAY;
  open: OpenNode;
  close: CloseNode | null;
  bodies: BodyNode[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, bodies: BodyNode[]): ArrayNode {
  const lastStatement = bodies.lastOrNull()?.statements?.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.ARRAY,
    start: open.start,
    stop: close?.stop ?? lastStatement?.stop ?? open.stop,
    hidden: [],
    open,
    close,
    bodies,
  };
}
