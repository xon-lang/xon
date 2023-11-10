import '~/extensions';
import { BodyNode } from '~/parser/node/body/body-node';
import { CloseNode } from '~/parser/node/close/close-node';
import { OpenNode } from '~/parser/node/open/open-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const OBJECT_NODE_OPEN = '{';
export const OBJECT_NODE_CLOSE = '}';

export interface ObjectNode extends Node {
  $: NodeType.OBJECT;
  open: OpenNode;
  close: CloseNode | null;
  bodies: BodyNode[];
}

export function objectNode(open: OpenNode, close: CloseNode | null, bodies: BodyNode[]): ObjectNode {
  const lastStatement = bodies.lastOrNull()?.statements?.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.OBJECT,
    start: open.start,
    stop: close?.stop ?? lastStatement?.stop ?? open.stop,
    open,
    close,
    bodies,
  };
}
