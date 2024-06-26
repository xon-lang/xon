import {Array2, Integer, Nothing, nothing} from '../../../../../lib/types';
import {ASSIGN, TYPE} from '../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {SyntaxContext} from '../../../syntax-context';
import {Group, GroupNode, ObjectNode} from '../../group/group-node';
import {$Node, ExpressionNode, Node, is, isNonOperatorExpression, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {AssignNode, assignNode} from '../assign/assign-node';
import {partialToDeclaration} from '../declaration/declaration-node';
import {InvokeNode} from '../invoke/invoke-node';
import {TypeNode, typeNode} from '../type/type-node';
import {lambdaNode} from './lambda-node';

export function lambdaNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext) => {
    const parts = getLambdaParts(context);

    if (!parts || !parts.parameters) {
      return nothing;
    }

    if (parts.generics) {
      parts.generics.hiddenNodes = parts.genericsHiddenNodes;
    }

    const node = lambdaNode(context, parts.generics, parts.parameters, parts.type, parts.assign);

    return {node, index: parts.spliceIndex, deleteCount: parts.deleteCount};
  };
}

function getLambdaParts(context: SyntaxContext):
  | {
      spliceIndex: Integer;
      deleteCount: Integer;
      genericsHiddenNodes?: Array2<Node> | Nothing;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
      type?: TypeNode | Nothing;
      assign?: AssignNode | Nothing;
    }
  | Nothing {
  const typeOperatorFound = nodeFindMap(context.nodes, 0, false, (node, index, nodes) => {
    if (
      is<OperatorNode>(node, $Node.OPERATOR) &&
      node.text === TYPE &&
      isNonOperatorExpression(nodes[index + 1]) &&
      (is<GroupNode>(nodes[index - 1], $Node.GROUP) ||
        (is<InvokeNode>(nodes[index - 1], $Node.INVOKE) &&
          is<ObjectNode>((nodes[index - 1] as InvokeNode).instance, $Node.OBJECT) &&
          is<GroupNode>((nodes[index - 1] as InvokeNode).group, $Node.GROUP)))
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (typeOperatorFound) {
    const header = getGenericsParameters(context, context.nodes[typeOperatorFound.index - 1]);
    const typeValue = context.nodes[typeOperatorFound.index + 1] as ExpressionNode;
    const assignOperator = context.nodes[typeOperatorFound.index + 2];
    const assignValue = context.nodes[typeOperatorFound.index + 3];
    const type = typeNode(context, typeOperatorFound.node, typeValue);

    if (
      is<OperatorNode>(assignOperator, $Node.OPERATOR) &&
      assignOperator.text === ASSIGN &&
      isNonOperatorExpression(assignValue)
    ) {
      const assign = assignNode(context, assignOperator, assignValue);

      return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 5, ...header, type, assign};
    }

    return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 3, ...header, type};
  }

  const assignOperatorFound = nodeFindMap(context.nodes, 0, false, (node, index, nodes) => {
    if (
      is<OperatorNode>(node, $Node.OPERATOR) &&
      node.text === ASSIGN &&
      isNonOperatorExpression(nodes[index + 1]) &&
      (is<GroupNode>(nodes[index - 1], $Node.GROUP) ||
        (is<InvokeNode>(nodes[index - 1], $Node.INVOKE) &&
          is<ObjectNode>((nodes[index - 1] as InvokeNode).instance, $Node.OBJECT) &&
          is<GroupNode>((nodes[index - 1] as InvokeNode).group, $Node.GROUP)))
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (assignOperatorFound) {
    const header = getGenericsParameters(context, context.nodes[assignOperatorFound.index - 1]);
    const assignValue = context.nodes[assignOperatorFound.index + 1] as ExpressionNode;
    const assign = assignNode(context, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  return nothing;
}

function getGenericsParameters(
  context: SyntaxContext,
  node: Node,
): {
  genericsHiddenNodes?: Array2<Node> | Nothing;
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

    return {genericsHiddenNodes: node.hiddenNodes, generics: node.instance, parameters: node.group};
  }

  return {};
}

function parseDeclarations(context: SyntaxContext, group: Group): void {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(context, {id: item.value});
    }
  }
}
