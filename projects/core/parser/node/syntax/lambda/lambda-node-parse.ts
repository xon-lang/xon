import {Integer, Nothing, nothing} from '../../../../lib/core';
import {ASSIGN, TYPE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {Group, GroupNode, ObjectNode} from '../../group/group-node';
import {$Node, ExpressionNode, Node, findNode, is, isExpressionNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {partialToDeclaration} from '../declaration/declaration-node';
import {InvokeNode} from '../invoke/invoke-node';
import {PrefixNode, prefixNode} from '../prefix/prefix-node';
import {lambdaNode} from './lambda-node';

export function lambdaNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    const parts = getLambdaParts(context);

    if (!parts || !parts.parameters) {
      return nothing;
    }

    const node = lambdaNode(parts.generics, parts.parameters, parts.type, parts.assign);

    return {node, spliceIndex: parts.spliceIndex, deleteCount: parts.deleteCount};
  };
}

function getLambdaParts(context: SyntaxContext):
  | {
      spliceIndex: Integer;
      deleteCount: Integer;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
      type?: PrefixNode | Nothing;
      assign?: PrefixNode | Nothing;
    }
  | Nothing {
  const typeOperatorFound = findNode(
    context.nodes,
    0,
    false,
    (x, index, nodes): x is OperatorNode =>
      is<OperatorNode>(x, $Node.OPERATOR) &&
      x.text === TYPE &&
      isExpressionNode(nodes[index + 1]) &&
      (is<GroupNode>(nodes[index - 1], $Node.GROUP) ||
        (is<InvokeNode>(nodes[index - 1], $Node.INVOKE) &&
          is<ObjectNode>((nodes[index - 1] as InvokeNode).instance, $Node.OBJECT) &&
          is<GroupNode>((nodes[index - 1] as InvokeNode).group, $Node.GROUP))),
  );

  if (typeOperatorFound) {
    const header = getGenericsParameters(context, context.nodes[typeOperatorFound.index - 1]);
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
    false,
    (x, index, nodes): x is OperatorNode =>
      is<OperatorNode>(x, $Node.OPERATOR) &&
      x.text === ASSIGN &&
      isExpressionNode(nodes[index + 1]) &&
      (is<GroupNode>(nodes[index - 1], $Node.GROUP) ||
        (is<InvokeNode>(nodes[index - 1], $Node.INVOKE) &&
          is<ObjectNode>((nodes[index - 1] as InvokeNode).instance, $Node.OBJECT) &&
          is<GroupNode>((nodes[index - 1] as InvokeNode).group, $Node.GROUP))),
  );

  if (assignOperatorFound) {
    const header = getGenericsParameters(context, context.nodes[assignOperatorFound.index - 1]);
    const assignValue = context.nodes[assignOperatorFound.index + 1] as ExpressionNode;
    const assign = prefixNode(context, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  return nothing;
}

function getGenericsParameters(
  context: SyntaxContext,
  node: Node,
): {
  generics?: Group | Nothing;
  parameters?: Group | Nothing;
} {
  if (is<GroupNode>(node, $Node.GROUP)) {
    parseDeclarations(context, node);

    return {parameters: node};
  }

  if (is<InvokeNode>(node, $Node.INVOKE) && is<ObjectNode>(node.instance, $Node.OBJECT)) {
    parseDeclarations(context, node.instance);
    parseDeclarations(context, node.group);

    return {generics: node.instance, parameters: node.group};
  }

  return {};
}

function parseDeclarations(context: SyntaxContext, group: Group): Nothing {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(context, {id: item.value});
    }
  }
}
