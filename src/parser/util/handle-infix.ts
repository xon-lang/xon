import { ArrayAssignNode, arrayAssignNode } from '~/parser/node/array-assign/array-assign-node';
import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode, assignNode } from '~/parser/node/assign/assign-node';
import { DeclarationNode, declarationNode } from '~/parser/node/declaration/declaration-node';
import { IdAssignNode, idAssignNode } from '~/parser/node/id-assign/id-assign-node';
import { IdNode } from '~/parser/node/id/id-node';
import { infixNode } from '~/parser/node/infix/infix-node';
import { InvokeNode } from '~/parser/node/invoke/invoke-node';
import { memberNode } from '~/parser/node/member/member-node';
import { metaMemberNode } from '~/parser/node/meta-member/meta-member-node';
import { ModelNode } from '~/parser/node/model/model-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { ObjectAssignNode, objectAssignNode } from '~/parser/node/object-assign/object-assign-node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { typeNode } from '~/parser/node/type/type-node';
import { ParserContext } from '~/parser/parser-context';
import { ASSIGN_TOKEN, MEMBER_TOKEN, META_MEMBER_TOKEN, TYPE_TOKEN } from '~/parser/util/operators';
import { Node } from '../node/node';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function handleInfix(context: ParserContext, operator: OperatorNode, left: Node, right: Node): Node {
  if (operator.text === MEMBER_TOKEN) {
    if (is<IdNode>(right, NodeType.ID)) {
      return memberNode(left, operator, right);
    }

    throw new Error('Not implemented');
  }

  if (operator.text === META_MEMBER_TOKEN) {
    if (is<IdNode>(right, NodeType.ID)) {
      return metaMemberNode(left, operator, right);
    }

    throw new Error('Not implemented');
  }

  if (operator.text === TYPE_TOKEN) {
    const type = typeNode(operator, right);

    if (is<InvokeNode>(left, NodeType.INVOKE) && is<IdNode>(left.instance, NodeType.ID)) {
      return declarationNode(null, left.instance, left.group, type, null);
    }

    if (is<IdNode>(left, NodeType.ID) || is<ArrayNode>(left, NodeType.ARRAY) || is<ObjectNode>(left, NodeType.OBJECT)) {
      return declarationNode(null, left, null, type, null);
    }

    throw new Error('Not implemented');
  }

  if (operator.text === ASSIGN_TOKEN) {
    const assign = assignNode(operator, right);

    if (is<DeclarationNode>(left, NodeType.DECLARATION)) {
      left.assign = assign;
      assign.parent = left;

      return left;
    }

    if (
      !is<ModelNode>(context.parent, NodeType.MODEL) &&
      !is<ModifierNode>(context.nodes[0], NodeType.MODIFIER) &&
      !is<InvokeNode>(left, NodeType.INVOKE)
    ) {
      return createAssignNode(left, assign);
    }

    throw new Error('Not implemented');
  }

  return infixNode(operator, left, right);
}

function createAssignNode(assignee: Node, assign: AssignNode): IdAssignNode | ArrayAssignNode | ObjectAssignNode {
  if (is<IdNode>(assignee, NodeType.ID) && assign) {
    return idAssignNode(assignee, assign);
  }

  if (is<ArrayNode>(assignee, NodeType.ARRAY) && assign) {
    return arrayAssignNode(assignee, assign);
  }

  if (is<ObjectNode>(assignee, NodeType.OBJECT) && assign) {
    return objectAssignNode(assignee, assign);
  }

  throw new Error('Not implemented');
}

// function isAssigneeNode(node: Node): node is IdNode | ArrayNode | ObjectNode {
//   return is<IdNode>(node, NodeType.ID) || is<ArrayNode>(node, NodeType.ARRAY) || is<ObjectNode>(node, NodeType.OBJECT);
// }
