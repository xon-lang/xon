import '~/extensions';
import { CloseNode } from '~/parser/node/close/close-node';
import { clonePosition } from '~/parser/node/node-position';
import { OpenNode } from '~/parser/node/open/open-node';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const OBJECT_NODE_OPEN = '{';
export const OBJECT_NODE_CLOSE = '}';

export interface ObjectNode extends Node {
  $: NodeType.OBJECT;
  open: OpenNode;
  close: CloseNode | null;
  items: StatementNode[];
}

export function objectNode(open: OpenNode, close: CloseNode | null, items: StatementNode[]): ObjectNode {
  const lastStatement = items.lastOrNull()?.nodes?.lastOrNull();

  return {
    $: NodeType.OBJECT,
    start: clonePosition(open.start),
    stop: clonePosition(close?.stop ?? lastStatement?.stop ?? open.stop),
    open,
    close,
    items,
  };
}
