import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {
  DeclarationListNode,
  DeclarationNode,
  declarationListNode,
  declarationNode,
} from '../node/syntax/declaration/declaration-node';
import {GroupNode} from '../node/syntax/group/group-node';
import {InfixNode} from '../node/syntax/infix/infix-node';
import {InvokeNode} from '../node/syntax/invoke/invoke-node';
import {ObjectNode} from '../node/syntax/object/object-node';
import {PrefixNode, prefixNode} from '../node/syntax/prefix/prefix-node';
import {IdNode} from '../node/token/id/id-node';
import {
  ASSIGN_TOKEN,
  GROUP_NODE_OPEN_CODE,
  MODIFIERS,
  MODIFIERS_WITH_ATTRIBUTES,
  OBJECT_NODE_OPEN_CODE,
  TYPE_TOKEN,
} from '../syntax-config';
import {SyntaxContext} from '../syntax-context';

export function collapseDeclaration(context: SyntaxContext): void {
  const node = context.nodes[0];

  const declaration = parseStatement(context, node);

  if (declaration) {
    context.nodes[0] = declaration;
  }
}

function parseStatement(context: SyntaxContext, node: Node): DeclarationNode | Nothing {
  const parts = getDeclarationParts(context, node);

  if (!parts) {
    return nothing;
  }

  if (parts.modifier) {
    return declarationNode(parts);
  }

  const parentStatementNode = context.parentStatement?.item;

  if (
    is<DeclarationNode>(parentStatementNode, $Node.DECLARATION) &&
    parentStatementNode.modifier &&
    MODIFIERS_WITH_ATTRIBUTES.includes(parentStatementNode.modifier?.text)
  ) {
    const declaration = declarationNode(parts);
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

  return declarationNode(parts);
}

function getDeclarationParts(
  context: SyntaxContext,
  node: Node | Nothing,
): (Partial<DeclarationNode> & {id: IdNode}) | Nothing {
  if (!node) {
    return nothing;
  }

  const {header, type, assign} = getHeaderTypeAssign(context, node);

  if (is<PrefixNode>(header, $Node.PREFIX) && MODIFIERS.includes(header.operator.text)) {
    if (!header.value) {
      return nothing;
    }

    const underModifier = getUnderModifier(context, header.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifier: header.operator, ...underModifier, type, assign};
  }

  const underModifier = getUnderModifier(context, header);

  if (!underModifier) {
    return nothing;
  }

  return {...underModifier, type, assign};
}

function getHeaderTypeAssign(
  context: SyntaxContext,
  node: Node | Nothing,
): {header: Node | Nothing; type?: PrefixNode | Nothing; assign?: PrefixNode | Nothing} {
  if (is<InfixNode>(node, $Node.INFIX)) {
    if (node.operator.text === TYPE_TOKEN) {
      const type = prefixNode(context, node.operator, node.right);

      return {header: node.left, type};
    }

    if (node.operator.text === ASSIGN_TOKEN) {
      const assign = prefixNode(context, node.operator, node.right);
      const headerType = getHeaderTypeAssign(context, node.left);

      return {...headerType, assign};
    }
  }

  return {header: node};
}

function getUnderModifier(
  context: SyntaxContext,
  node: Node | Nothing,
): {id: IdNode; generics?: DeclarationListNode | Nothing; parameters?: DeclarationListNode | Nothing} | Nothing {
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

      const declarations = node.group.items.map((x) => parseParameter(context, x));
      const declarationList = declarationListNode(node.group.open, node.group.close, declarations);

      if (declarationList.open.text === GROUP_NODE_OPEN_CODE) {
        return {...instance, parameters: declarationList};
      }

      if (declarationList.open.text === OBJECT_NODE_OPEN_CODE) {
        return {...instance, generics: declarationList};
      }
    }
  }

  return nothing;
}
