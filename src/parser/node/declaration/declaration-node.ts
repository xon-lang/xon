import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode } from '~/parser/node/assign/assign-node';
import { GroupNode } from '~/parser/node/group/group-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node, addNodeParent } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { TypeNode } from '~/parser/node/type/type-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  assignee: IdNode | ArrayNode | ObjectNode | null;
  group: GroupNode | ObjectNode | ArrayNode | null;
  type: TypeNode | null;
  assign: AssignNode | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  assignee: IdNode | ArrayNode | ObjectNode | null,
  group: GroupNode | ObjectNode | ArrayNode | null,
  type: TypeNode | null,
  assign: AssignNode | null,
): DeclarationNode {
  const startNode = modifier ?? assignee ?? group ?? type ?? assign;
  const stopNode = assign ?? type ?? group ?? assignee ?? modifier;

  const node: DeclarationNode = {
    $: NodeType.DECLARATION,
    range: rangeFromNodes(startNode, stopNode),
    modifier,
    assignee,
    group,
    type,
    assign,
  };

  addNodeParent(node, modifier, assignee, group, type, assign);

  return node;
}
