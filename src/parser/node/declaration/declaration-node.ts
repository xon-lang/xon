import { ArrayNode } from '../../../parser/node/array/array-node';
import { AssignNode } from '../../../parser/node/assign/assign-node';
import { GroupNode } from '../../../parser/node/group/group-node';
import { IdNode } from '../../../parser/node/id/id-node';
import { ModifierNode } from '../../../parser/node/modifier/modifier-node';
import { Node, addNodeParent } from '../../../parser/node/node';
import { ObjectNode } from '../../../parser/node/object/object-node';
import { TypeNode } from '../../../parser/node/type/type-node';
import { is } from '../../../parser/util/is';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export type Group = GroupNode | ArrayNode | ObjectNode;

export type Assignee = IdNode | Group;

export enum DeclarationType {
  UNKNOWN = 'UNKNOWN',
  OBJECT = 'OBJECT',
  METHOD = 'METHOD',
  VALUE = 'VALUE',
  ATTRIBUTE = 'ATTRIBUTE',
}

// todo mb add hasAttributes
export interface DeclarationNode extends Node {
  readonly $: NodeType.DECLARATION;
  readonly declarationType: DeclarationType;
  readonly modifier: ModifierNode | null;
  readonly assignee: Assignee | null;

  // todo make group as parameters
  readonly group: Group | null;
  readonly type: TypeNode | null;
  readonly assign: AssignNode | null;
  readonly attributes: DeclarationNode[];
}

export function declarationNode(
  declarationType: DeclarationType,
  modifier: ModifierNode | null,
  assignee: Assignee | null,
  group: Group | null,
  type: TypeNode | null,
  assign: AssignNode | null,
): DeclarationNode {
  const startNode = modifier ?? assignee ?? group ?? type ?? assign;
  const stopNode = assign ?? type ?? group ?? assignee ?? modifier;

  const node: DeclarationNode = {
    $: NodeType.DECLARATION,
    range: rangeFromNodes(startNode, stopNode),
    declarationType,
    modifier,
    assignee,
    group,
    type,
    assign,
    attributes: [],
  };

  addNodeParent(node, modifier, assignee, group, type, assign);

  return node;
}

export function isGroupNode(node: Node): node is Group {
  return (
    is<GroupNode>(node, NodeType.GROUP) || is<ArrayNode>(node, NodeType.ARRAY) || is<ObjectNode>(node, NodeType.OBJECT)
  );
}

export function isAssigneeNode(node: Node): node is Assignee {
  return is<IdNode>(node, NodeType.ID) || isGroupNode(node);
}

export function isObjectDeclaration(node: Node): node is DeclarationNode {
  return is<DeclarationNode>(node, NodeType.DECLARATION) && node.declarationType === DeclarationType.OBJECT;
}
