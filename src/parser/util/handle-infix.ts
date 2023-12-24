import { arrayAssignNode } from '../../parser/node/array-assign/array-assign-node';
import { ArrayNode } from '../../parser/node/array/array-node';
import { assignNode } from '../../parser/node/assign/assign-node';
import {
  DeclarationNode,
  DeclarationType,
  declarationNode,
  isAssigneeNode,
  isObjectDeclaration,
} from '../../parser/node/declaration/declaration-node';
import { GroupNode } from '../../parser/node/group/group-node';
import { idAssignNode } from '../../parser/node/id-assign/id-assign-node';
import { IdNode } from '../../parser/node/id/id-node';
import { infixNode } from '../../parser/node/infix/infix-node';
import { lambdaNode } from '../../parser/node/lambda/lambda-node';
import { MemberNode, memberNode } from '../../parser/node/member/member-node';
import { MetaMemberNode, metaMemberNode } from '../../parser/node/meta-member/meta-member-node';
import { objectAssignNode } from '../../parser/node/object-assign/object-assign-node';
import { ObjectNode } from '../../parser/node/object/object-node';
import { OperatorNode } from '../../parser/node/operator/operator-node';
import { typeNode } from '../../parser/node/type/type-node';
import { ParserContext } from '../../parser/parser-context';
import { Node } from '../node/node';
import { NodeType } from '../node/node-type';
import { ASSIGN_TOKEN, MEMBER_TOKEN, META_MEMBER_TOKEN, TYPE_TOKEN } from '../parser-config';
import { is } from './is';

export function handleInfix(context: ParserContext, operator: OperatorNode, left: Node, right: Node | null): Node {
  if (operator.text === MEMBER_TOKEN) {
    return createMember(operator, left, right);
  }

  if (operator.text === META_MEMBER_TOKEN) {
    return createMetaMember(operator, left, right);
  }

  if (operator.text === TYPE_TOKEN) {
    return createType(context, operator, left, right);
  }

  if (operator.text === ASSIGN_TOKEN) {
    return createAssign(operator, left, right);
  }

  return infixNode(operator, left, right);
}

function createMember(operator: OperatorNode, left: Node, right: Node | null): MemberNode {
  if (is<IdNode>(right, NodeType.ID)) {
    return memberNode(left, operator, right);
  }

  throw new Error('Not implemented');
}

function createMetaMember(operator: OperatorNode, left: Node, right: Node | null): MetaMemberNode {
  if (is<IdNode>(right, NodeType.ID)) {
    return metaMemberNode(left, operator, right);
  }

  throw new Error('Not implemented');
}

function createType(context: ParserContext, operator: OperatorNode, left: Node, right: Node | null): DeclarationNode {
  const type = typeNode(operator, right);

  if (isAssigneeNode(left)) {
    if (isObjectDeclaration(context.parent)) {
      const declaration = declarationNode(DeclarationType.ATTRIBUTE, null, left, null, type, null);
      context.parent.attributes.push(declaration);

      return declaration;
    }

    return declarationNode(DeclarationType.UNKNOWN, null, left, null, type, null);
  }

  throw new Error('Not implemented');
}

function createAssign(operator: OperatorNode, left: Node, right: Node | null): Node {
  const assign = assignNode(operator, right);

  // todo check if it should be always declaration
  // if (
  //   is<IdNode>(left, NodeType.ID) ||
  //   is<GroupNode>(left, NodeType.GROUP) ||
  //   is<ArrayNode>(left, NodeType.ARRAY) ||
  //   is<ObjectNode>(left, NodeType.OBJECT)
  // ) {
  //   return declarationNode(null, left, null, null, assign);
  // }

  // todo change all with assignee node
  if (is<IdNode>(left, NodeType.ID) && assign) {
    return idAssignNode(left, assign);
  }

  if (is<ArrayNode>(left, NodeType.ARRAY) && assign) {
    return arrayAssignNode(left, assign);
  }

  if (is<ObjectNode>(left, NodeType.OBJECT) && assign) {
    return objectAssignNode(left, assign);
  }

  if (is<GroupNode>(left, NodeType.GROUP) && assign) {
    return lambdaNode(left, assign);
  }

  throw new Error('Not implemented');
}
