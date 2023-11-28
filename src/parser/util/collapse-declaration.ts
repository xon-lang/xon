import { ArrayAssignNode, arrayAssignNode } from '~/parser/node/array-assign/array-assign-node';
import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode, assignNode } from '~/parser/node/assign/assign-node';
import { AttributeNode, attributeNode } from '~/parser/node/attribute/attribute-node';
import { IdAssignNode, idAssignNode } from '~/parser/node/id-assign/id-assign-node';
import { IdNode } from '~/parser/node/id/id-node';
import { InfixNode } from '~/parser/node/infix/infix-node';
import { ModelNode, modelNode } from '~/parser/node/model/model-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { ObjectAssignNode, objectAssignNode } from '~/parser/node/object-assign/object-assign-node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { ParametersNode } from '~/parser/node/parameters/parameters-node';
import { TypeNode, typeNode } from '~/parser/node/type/type-node';
import { is } from '~/parser/util/is';
import { ASSIGN_TOKEN, MODEL_MODIFIER, TYPE_TOKEN } from '~/parser/util/operators';

export function collapseDeclaration(nodes: Node[], parent: Node | null): void {
  const firstNode = nodes[0];

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    if (firstNode.text === MODEL_MODIFIER) {
      const result = collapseModelNode(firstNode, nodes[1]);

      nodes[0] = result;
      nodes.splice(1, 1);

      return;
    }
  }

  if (is<ModelNode>(parent, NodeType.MODEL)) {
    const result = collapseAttributeNode(nodes[0]);

    nodes[0] = result;
    nodes.splice(1, 1);

    parent.attributes.push(result);

    return;
  }

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    const result = collapseAssignNode(nodes[0]);

    nodes[0] = result;
    nodes.splice(1, 1);
  }
}

function collapseAssignNode(node: Node): IdAssignNode | ArrayAssignNode | ObjectAssignNode {
  const { assignee, assign } = assigneeParametersTypeValue(node);

  if (is<IdNode>(assignee, NodeType.ID) && assign) {
    return idAssignNode(assignee, assign);
  }

  if (is<ArrayNode>(assignee, NodeType.ARRAY) && assign) {
    return arrayAssignNode(assignee, assign);
  }

  if (is<ObjectAssignNode>(assignee, NodeType.OBJECT) && assign) {
    return objectAssignNode(assignee, assign);
  }

  throw new Error('Not implemented');
}

function collapseAttributeNode(node: Node): AttributeNode {
  const { assignee, parameters, type, assign } = assigneeParametersTypeValue(node);

  if (is<IdNode>(assignee, NodeType.ID)) {
    return attributeNode(null, assignee, parameters ?? null, type ?? null, assign ?? null);
  }

  throw new Error('Not implemented');
}

function collapseModelNode(modifier: ModifierNode, node: Node): ModelNode {
  const { assignee, type } = assigneeParametersTypeValue(node);

  if (is<IdNode>(assignee, NodeType.ID)) {
    const model = modelNode(modifier, assignee, type ?? null);
    model.parent?.declarations?.push(model);

    return model;
  }

  throw new Error('Not implemented');
}

function assigneeParametersTypeValue(node: Node): Partial<{
  assignee: IdNode | ArrayNode | ObjectNode;
  parameters: ParametersNode;
  type: TypeNode;
  assign: AssignNode;
}> {
  if (isAssigneeNode(node)) {
    return { assignee: node };
  }

  if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === TYPE_TOKEN && isAssigneeNode(node.left)) {
    const { operator, left, right } = node;
    const type = typeNode(operator, right);

    return { assignee: left, type };
  }

  if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === ASSIGN_TOKEN) {
    const { operator, left, right } = node;
    const assigneeType = assigneeParametersTypeValue(left);
    const assign = assignNode(operator, right);

    return { ...assigneeType, assign };
  }

  throw new Error('Not implemented');
}

function isAssigneeNode(node: Node): node is IdNode | ArrayNode | ObjectNode {
  return is<IdNode>(node, NodeType.ID) || is<ArrayNode>(node, NodeType.ARRAY) || is<ObjectNode>(node, NodeType.OBJECT);
}
