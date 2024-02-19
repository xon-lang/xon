import { Boolean2, Nothing, nothing } from '../../lib/core';
import {
  DeclarationListNode,
  DeclarationNode,
  declarationListNode,
  declarationNode,
} from '../node/declaration/declaration-node';
import { GroupNode } from '../node/group/group-node';
import { IdNode } from '../node/id/id-node';
import { InfixNode } from '../node/infix/infix-node';
import { InvokeNode } from '../node/invoke/invoke-node';
import { $Node, Node } from '../node/node';
import { ObjectNode } from '../node/object/object-node';
import { PrefixNode, prefixNode } from '../node/prefix/prefix-node';
import {
  ASSIGN_TOKEN,
  GROUP_NODE_OPEN_CODE,
  MODEL_MODIFIER,
  OBJECT_NODE_OPEN_CODE,
  TYPE_TOKEN,
} from '../syntax-config';
import { SyntaxContext } from '../syntax-context';
import { is } from './is';

// eslint-disable-next-line multiline-comment-style
/*
model A{T}: B{T}
  a
  a:{T}(): Integer = 1
  a{T}(): Integer = 1
  const a
  var a: Integer = 1
*/

export function collapseDeclarations(context: SyntaxContext): void {
  const node = context.nodes[0];

  const declaration = parseDeclaration(context, node, false);

  if (declaration) {
    context.nodes[0] = declaration;
  }
}

function parseDeclaration(context: SyntaxContext, node: Node, force: Boolean2): DeclarationNode | Nothing {
  const { header, type, value } = getHeaderTypeValue(context, node);

  return parseHeader(context, header, type, value, force);
}

function getHeaderTypeValue(
  context: SyntaxContext,
  node: Node,
): { header: Node; type?: PrefixNode | Nothing; value?: PrefixNode | Nothing } {
  if (is<InfixNode>(node, $Node.INFIX)) {
    if (!node.left || !node.right) {
      throw new Error('Not implemented');
    }

    if (node.operator.text === TYPE_TOKEN) {
      const type = prefixNode(context, node.operator, node.right);

      return { header: node.left, type };
    }

    if (node.operator.text === ASSIGN_TOKEN) {
      const value = prefixNode(context, node.operator, node.right);
      const headerType = getHeaderTypeValue(context, node.left);

      return { ...headerType, value };
    }
  }

  return { header: node };
}

function parseHeader(
  context: SyntaxContext,
  node: Node,
  type: PrefixNode | Nothing,
  assign: PrefixNode | Nothing,
  force: Boolean2,
): DeclarationNode | Nothing {
  if (is<PrefixNode>(node, $Node.PREFIX) && node.operator.text === MODEL_MODIFIER) {
    const underModifier = parseUnderModifierNode(context, node.value);

    return declarationNode({ modifier: node.operator, ...underModifier, type, assign });
  }

  const parentNode = context.parentStatement?.item;

  if (is<DeclarationNode>(parentNode, $Node.DECLARATION) && parentNode.modifier?.text === MODEL_MODIFIER) {
    const underModifier = parseUnderModifierNode(context, node);

    const declaration = declarationNode({ ...underModifier, type, assign });
    parentNode.attributes.push(declaration);

    return declaration;
  }

  if (force) {
    const underModifier = parseUnderModifierNode(context, node);

    return declarationNode({ ...underModifier, type, assign });
  }

  return nothing;
}

function parseUnderModifierNode(
  context: SyntaxContext,
  node: Node | Nothing,
): { id?: IdNode | Nothing; generics?: DeclarationListNode | Nothing; parameters?: DeclarationListNode | Nothing } {
  if (!node) {
    return {};
  }

  if (is<IdNode>(node, $Node.ID)) {
    return { id: node };
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    if (is<GroupNode>(node.group, $Node.GROUP) || is<ObjectNode>(node.group, $Node.OBJECT)) {
      const declarations = node.group.items.map((x) => parseDeclaration(context, x, true));
      const declarationList = declarationListNode(node.group.open, node.group.close, declarations);
      const instance = parseUnderModifierNode(context, node.instance);

      if (declarationList.open.text.charCodeAt(0) === GROUP_NODE_OPEN_CODE) {
        return { ...instance, parameters: declarationList };
      }

      if (declarationList.open.text.charCodeAt(0) === OBJECT_NODE_OPEN_CODE) {
        return { ...instance, generics: declarationList };
      }
    }
  }

  return {};
}
