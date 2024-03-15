import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {$DeclarationNodeType, DeclarationNode, declarationNode} from '../node/syntax/declaration/declaration-node';
import {GroupNode} from '../node/syntax/group/group-node';
import {InfixNode} from '../node/syntax/infix/infix-node';
import {InvokeNode} from '../node/syntax/invoke/invoke-node';
import {ObjectNode} from '../node/syntax/object/object-node';
import {PrefixNode} from '../node/syntax/prefix/prefix-node';
import {IdNode} from '../node/token/id/id-node';
import {
  ASSIGN,
  GROUP_NODE_OPEN,
  MODIFIER_KEYWORDS,
  OBJECT_NODE_OPEN,
  TYPE_MODIFIERS,
  TYPE_TOKEN,
} from '../syntax-config';
import {SyntaxContext} from '../syntax-context';

export function parseDeclarationStatement(context: SyntaxContext, node: Node): DeclarationNode | Nothing {
  const parts = getDeclarationParts(context, node);

  if (!parts) {
    return nothing;
  }

  if (parts.modifier) {
    return declarationNode($DeclarationNodeType.MODIFIER, parts);
  }

  const parentStatementNode = context.parentStatement?.declaration;

  if (parentStatementNode?.modifier && TYPE_MODIFIERS.includes(parentStatementNode.modifier?.text)) {
    const declaration = declarationNode($DeclarationNodeType.ATTRIBUTE, parts);
    parentStatementNode.attributes.push(declaration);

    return declaration;
  }

  return nothing;
}

function parseParameter(context: SyntaxContext, node: Node | Nothing): DeclarationNode | Nothing {
  if (!node) {
    return nothing;
  }

  const parts = getDeclarationParts(context, node);

  if (!parts) {
    return nothing;
  }

  return declarationNode($DeclarationNodeType.PARAMETER, parts);
}

function parseGeneric(context: SyntaxContext, node: Node | Nothing): DeclarationNode | Nothing {
  if (!node) {
    return nothing;
  }

  const parts = getDeclarationParts(context, node);

  if (!parts) {
    return nothing;
  }

  return declarationNode($DeclarationNodeType.GENERIC, parts);
}

function getDeclarationParts(
  context: SyntaxContext,
  node: Node | Nothing,
): (Partial<DeclarationNode> & {id: IdNode}) | Nothing {
  if (!node) {
    return nothing;
  }

  const {header, type, assign} = getHeaderTypeAssign(context, node);

  if (is<PrefixNode>(header, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(header.operator.text)) {
    const underModifier = getUnderModifier(context, header.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifier: header.operator, ...underModifier, type, value: assign};
  }

  const underModifier = getUnderModifier(context, header);

  if (!underModifier) {
    return nothing;
  }

  return {...underModifier, type, value: assign};
}

function getHeaderTypeAssign(
  context: SyntaxContext,
  node: Node | Nothing,
): {header: Node | Nothing; type?: Node | Nothing; assign?: Node | Nothing} {
  if (is<InfixNode>(node, $Node.INFIX)) {
    if (node.operator.text === TYPE_TOKEN) {
      return {header: node.left, type: node.right};
    }

    if (node.operator.text === ASSIGN) {
      const headerType = getHeaderTypeAssign(context, node.left);

      return {...headerType, assign: node.right};
    }
  }

  return {header: node};
}

function getUnderModifier(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      id: IdNode;
      generics?: (DeclarationNode | Nothing)[] | Nothing;
      parameters?: (DeclarationNode | Nothing)[] | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return {id: node};
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    if (is<GroupNode>(node.group, $Node.GROUP) || is<ObjectNode>(node.group, $Node.OBJECT)) {
      const instance = getUnderModifier(context, node.instance);

      if (!instance) {
        return nothing;
      }

      if (node.group.open.text === GROUP_NODE_OPEN) {
        const parameters = node.group.items.map((x) => parseParameter(context, x));

        return {...instance, parameters};
      }

      if (node.group.open.text === OBJECT_NODE_OPEN) {
        const generics = node.group.items.map((x) => parseParameter(context, x));

        return {...instance, generics};
      }
    }
  }

  return nothing;
}
