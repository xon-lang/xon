import { AttributeNode } from '~/parser/node/attribute/attribute-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { TypeNode } from '~/parser/node/type/type-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface ModelNode extends Node {
  $: NodeType.MODEL;
  modifier: ModifierNode;
  id: IdNode;
  base: TypeNode | null;
  children: AttributeNode[];
}

export function modelNode(modifier: ModifierNode, id: IdNode, base: TypeNode | null): ModelNode {
  return {
    $: NodeType.MODEL,
    range: rangeFromNodes(modifier, base ?? id),
    modifier,
    id,
    base,
    children: [],
  };
}
