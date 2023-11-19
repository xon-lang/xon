import { AssignNode } from '~/parser/node/assign/assign-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { ParametersNode } from '~/parser/node/parameters/parameters-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface AttributeNode extends Node {
  $: NodeType.ATTRIBUTE;
  modifier: ModifierNode | null;
  id: IdNode;
  parameters: ParametersNode | null;
  type: Node | null;
  assign: AssignNode | null;
  children: Node[];
}

export function attributeNode(
  modifier: ModifierNode | null,
  id: IdNode,
  parameters: ParametersNode | null,
  type: Node | null,
  assign: AssignNode | null,
): AttributeNode {
  return {
    $: NodeType.ATTRIBUTE,
    range: rangeFromNodes(modifier ?? id, assign ?? parameters ?? type ?? id ?? modifier),
    modifier,
    id,
    type,
    parameters,
    assign,
    children: [],
  };
}
