import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode } from '~/parser/node/assign/assign-node';
import { DeclarationNode } from '~/parser/node/declaration/declaration-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node, addNodeParent } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { TypeNode } from '~/parser/node/type/type-node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface ParameterNode extends Node {
  $: NodeType.PARAMETER;
  modifier: ModifierNode | null;
  assignee: IdNode | ArrayNode | ObjectNode;
  type: TypeNode | null;
  assign: AssignNode | null;
}

export function parameterNode(
  modifier: ModifierNode | null,
  assignee: IdNode | ArrayNode | ObjectNode,
  type: TypeNode | null,
  assign: AssignNode | null,
): ParameterNode {
  const node: ParameterNode = {
    $: NodeType.PARAMETER,
    range: rangeFromNodes(modifier ?? assignee, assign ?? type ?? assignee),
    modifier,
    assignee,
    type,
    assign,
  };

  addNodeParent(node, modifier, assignee, type, assign);

  return node;
}

export function parameterNodeFromDeclaration({
  modifier,
  assignee,
  group,
  type,
  assign,
}: DeclarationNode): ParameterNode {
  if (!assignee || group) {
    throw new Error('Not implemented');
  }

  return parameterNode(modifier, assignee, type, assign);
}
