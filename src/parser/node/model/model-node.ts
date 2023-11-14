import { AttributeNode } from '~/parser/node/attribute/attribute-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { TypeNode } from '~/parser/node/type/type-node';
import { NodeType } from '../node-type';

export interface ModelNode extends Node {
  $: NodeType.MODEL;
  modifier: ModifierNode;
  id: IdNode;
  type: TypeNode | null;
  attributes: AttributeNode[];
}

export function modelNode(modifier: ModifierNode, id: IdNode, type: TypeNode | null): ModelNode {
  return {
    $: NodeType.MODEL,
    start: clonePosition(modifier.start),
    stop: clonePosition((type ?? id).stop),
    modifier,
    id,
    type,
    attributes: [],
  };
}
