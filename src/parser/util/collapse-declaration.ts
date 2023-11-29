import { AttributeNode, attributeNode } from '~/parser/node/attribute/attribute-node';
import { DeclarationNode } from '~/parser/node/declaration/declaration-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModelNode, modelNode } from '~/parser/node/model/model-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { NodeType } from '~/parser/node/node-type';
import { ParserContext } from '~/parser/parser-context';
import { is } from '~/parser/util/is';
import { MODEL_MODIFIER } from '~/parser/util/operators';

export function collapseDeclaration(context: ParserContext): void {
  const firstNode = context.nodes[0];

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    const secondNode = context.nodes[1];

    if (is<DeclarationNode>(secondNode, NodeType.DECLARATION)) {
      const modifierDeclaration = createModifierDeclaration(firstNode, secondNode);
      context.nodes[0] = modifierDeclaration;
      context.nodes.splice(1, 1);

      return;
    }

    if (firstNode.text === MODEL_MODIFIER && is<IdNode>(secondNode, NodeType.ID) && context.nodes.length === 2) {
      const model = modelNode(firstNode, secondNode, null);
      context.nodes[0] = model;
      context.nodes.splice(1, 1);

      return;
    }

    throw new Error('Not implemented');
  }

  if (is<DeclarationNode>(firstNode, NodeType.DECLARATION)) {
    if (is<ModelNode>(context.parent, NodeType.MODEL)) {
      const modifierDeclaration = createAttributeNode(firstNode);
      context.nodes[0] = modifierDeclaration;

      return;
    }

    throw new Error('Not implemented');
  }
}

function createModifierDeclaration(modifier: ModifierNode, declaration: DeclarationNode): ModelNode {
  if (modifier.text === MODEL_MODIFIER && is<IdNode>(declaration.assignee, NodeType.ID)) {
    return modelNode(modifier, declaration.assignee, declaration.type);
  }

  throw new Error('Not implemented');
}

function createAttributeNode(declaration: DeclarationNode): AttributeNode {
  if (declaration.assignee && is<IdNode>(declaration.assignee, NodeType.ID)) {
    return attributeNode(null, declaration.assignee, declaration.group, declaration.type, declaration.assign);
  }

  throw new Error('Not implemented');
}
