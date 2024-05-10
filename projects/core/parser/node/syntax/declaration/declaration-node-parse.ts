import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {ASSIGN, MODIFIER_KEYWORDS, TYPE, TYPE_MODIFIERS} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {Group, GroupNode, ObjectNode} from '../../group/group-node';
import {$Node, ExpressionNode, Node, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {InvokeNode} from '../invoke/invoke-node';
import {PrefixNode, prefixNode} from '../prefix/prefix-node';
import {DeclarationNode, partialToDeclaration} from './declaration-node';

export function declarationNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    if (is<DeclarationNode>(context.nodes[0], $Node.DECLARATION)) {
      return nothing;
    }

    const parts = getDeclarationParts(context);

    if (!parts) {
      return nothing;
    }

    const parentDeclaration = context.parentStatement?.item;

    if (
      is<DeclarationNode>(parentDeclaration, $Node.DECLARATION) &&
      parentDeclaration.modifier?.text &&
      TYPE_MODIFIERS.includes(parentDeclaration.modifier.text)
    ) {
      const declaration = partialToDeclaration(context, parts);

      if (parentDeclaration.assign) {
        context.issueManager.addError(declaration.range, ISSUE_MESSAGE.unexpectedExpression());
      }

      return {spliceIndex: parts.spliceIndex, deleteCount: parts.deleteCount, node: declaration};
    }

    if (parts.modifier || parts.type) {
      const declaration = partialToDeclaration(context, parts);

      return {spliceIndex: parts.spliceIndex, deleteCount: parts.deleteCount, node: declaration};
    }

    return nothing;
  };
}

function getDeclarationParts(context: SyntaxContext):
  | {
      spliceIndex: Integer;
      deleteCount: Integer;
      modifier?: OperatorNode | Nothing;
      id: IdNode;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
      type?: PrefixNode | Nothing;
      assign?: PrefixNode | Nothing;
    }
  | Nothing {
  const typeOperatorFound = findNode(
    context.nodes,
    0,
    true,
    (x, index, nodes): x is OperatorNode =>
      index - 1 === 0 && is<OperatorNode>(x, $Node.OPERATOR) && x.text === TYPE && isExpressionNode(nodes[index + 1]),
  );

  if (typeOperatorFound) {
    const header = getHeader(context, context.nodes[typeOperatorFound.index - 1]);

    if (!header) {
      return nothing;
    }

    const typeValue = context.nodes[typeOperatorFound.index + 1] as ExpressionNode;
    const assignOperator = context.nodes[typeOperatorFound.index + 2];
    const assignValue = context.nodes[typeOperatorFound.index + 3];

    const type = prefixNode(context, typeOperatorFound.node, typeValue);

    if (
      is<OperatorNode>(assignOperator, $Node.OPERATOR) &&
      assignOperator.text === ASSIGN &&
      isExpressionNode(assignValue)
    ) {
      const assign = prefixNode(context, assignOperator, assignValue);

      return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 5, ...header, type, assign};
    }

    return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 3, ...header, type};
  }

  const assignOperatorFound = findNode(
    context.nodes,
    0,
    true,
    (x, index, nodes): x is OperatorNode =>
      index - 1 === 0 && is<OperatorNode>(x, $Node.OPERATOR) && x.text === ASSIGN && isExpressionNode(nodes[index + 1]),
  );

  if (assignOperatorFound) {
    const header = getHeader(context, context.nodes[assignOperatorFound.index - 1]);

    if (!header) {
      return nothing;
    }

    const assignValue = context.nodes[assignOperatorFound.index + 1] as ExpressionNode;
    const assign = prefixNode(context, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  const header = getHeader(context, context.nodes[0]);

  if (header) {
    return {spliceIndex: 0, deleteCount: 1, ...header};
  }

  return nothing;
}

function getHeader(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      modifier?: OperatorNode | Nothing;
      id: IdNode;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  if (is<PrefixNode>(node, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(node.operator.text)) {
    const underModifier = getUnderModifier(context, node.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifier: node.operator, ...underModifier};
  }

  return getUnderModifier(context, node);
}

function getUnderModifier(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      id: IdNode;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return {id: node};
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    if (
      is<InvokeNode>(node.instance, $Node.INVOKE) &&
      is<GroupNode>(node.group, $Node.GROUP) &&
      is<IdNode>(node.instance.instance, $Node.ID) &&
      is<ObjectNode>(node.instance.group, $Node.OBJECT)
    ) {
      parseDeclarations(context, node.instance.group);
      parseDeclarations(context, node.group);

      return {id: node.instance.instance, generics: node.instance.group, parameters: node.group};
    }

    if (is<IdNode>(node.instance, $Node.ID)) {
      parseDeclarations(context, node.group);

      if (is<ObjectNode>(node.group, $Node.OBJECT)) {
        return {id: node.instance, generics: node.group};
      }

      if (is<GroupNode>(node.group, $Node.GROUP)) {
        return {id: node.instance, parameters: node.group};
      }
    }
  }

  return nothing;
}

function parseDeclarations(context: SyntaxContext, group: Group): Nothing {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(context, {id: item.value});
    }
  }
}
