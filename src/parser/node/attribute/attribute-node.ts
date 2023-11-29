import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode } from '~/parser/node/assign/assign-node';
import { GroupNode } from '~/parser/node/group/group-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node, addNodeParent } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface AttributeNode extends Node {
  $: NodeType.ATTRIBUTE;
  modifier: ModifierNode | null;
  id: IdNode;
  group: GroupNode | ObjectNode | ArrayNode | null;
  type: Node | null;
  assign: AssignNode | null;
}

export function attributeNode(
  modifier: ModifierNode | null,
  id: IdNode,
  group: GroupNode | ObjectNode | ArrayNode | null,
  type: Node | null,
  assign: AssignNode | null,
): AttributeNode {
  const node: AttributeNode = {
    $: NodeType.ATTRIBUTE,
    range: rangeFromNodes(modifier ?? id, assign ?? group ?? type ?? id ?? modifier),
    parent: id.parent,
    modifier,
    id,
    type,
    group,
    assign,
  };

  id.parent?.declarations?.push(node);
  addNodeParent(node, modifier, id, type, group, assign);

  return node;
}
