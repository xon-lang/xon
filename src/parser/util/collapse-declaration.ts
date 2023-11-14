import { AssignNode, assignNode } from '~/parser/node/assign/assign-node';
import { attributeNode } from '~/parser/node/attribute/attribute-node';
import { IdNode } from '~/parser/node/id/id-node';
import { InfixNode } from '~/parser/node/infix/infix-node';
import { modelNode } from '~/parser/node/model/model-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { ParametersNode } from '~/parser/node/parameters/parameters-node';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { TypeNode, typeNode } from '~/parser/node/type/type-node';
import { is } from '~/parser/util/is';
import { ASSIGN_TOKEN, MODEL_MODIFIER, TYPE_TOKEN } from '~/parser/util/operators';

export function collapseDeclaration({ nodes, parent }: StatementNode): void {
  const firstNode = nodes[0];

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    if (firstNode.text === MODEL_MODIFIER) {
      collapseModelNode(firstNode, nodes);
    }
  } else if (is(parent, NodeType.MODEL)) {
    collapseAttributeNode(nodes);
  }

  throw new Error('Not implemented');
}

function collapseAttributeNode(nodes: Node[]): void {
  const { id, parameters, type, assign } = idParametersTypeValue(nodes[0]);

  if (id) {
    nodes[0] = attributeNode(null, id, parameters ?? null, type ?? null, assign ?? null);
    nodes.splice(1, 1);

    return;
  }

  throw new Error('Not implemented');
}

function collapseModelNode(modifier: ModifierNode, nodes: Node[]): void {
  const { id, type } = idParametersTypeValue(nodes[1]);

  if (id) {
    nodes[0] = modelNode(modifier, id, null);
    nodes.splice(1, 1);

    return;
  }

  if (id && type) {
    nodes[0] = modelNode(modifier, id, type);
    nodes.splice(1, 1);
  }

  throw new Error('Not implemented');
}

function idParametersTypeValue(
  node: Node,
): Partial<{ id: IdNode; parameters: ParametersNode; type: TypeNode; assign: AssignNode }> {
  if (is<IdNode>(node, NodeType.ID)) {
    return { id: node };
  }

  if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === TYPE_TOKEN && is<IdNode>(node.left, NodeType.ID)) {
    const { operator, left, right } = node;
    const type = typeNode(operator, right);

    return { id: left, type };
  }

  if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === ASSIGN_TOKEN) {
    const { operator, left, right } = node;
    const idType = idParametersTypeValue(left);
    const assign = assignNode(operator, right);

    return { ...idType, assign };
  }

  throw new Error('Not implemented');
}
