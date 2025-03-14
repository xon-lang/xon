import {
  $InvokeNode,
  $LambdaNode,
  $TypeNode,
  $ValueNode,
  GroupNode,
  Node,
  OperatorExpressionNode,
} from '#analyzer';
import {Nothing} from '#common';
import {is} from '#typing';

export type ExtractedDeclarationInfo = {
  target?: Node | Nothing;
  parameters?: GroupNode | Nothing;
  type?: OperatorExpressionNode | Nothing;
  assign?: OperatorExpressionNode | Nothing;
};

export function extractDeclarationInfo(node: Node | Nothing): ExtractedDeclarationInfo {
  if (!node) {
    return {};
  }

  if (is(node, $InvokeNode())) {
    return {target: node.instance, parameters: node.group};
  }

  if (is(node, $TypeNode())) {
    const {target, parameters} = extractDeclarationInfo(node.target);

    return {target, parameters, type: node.type};
  }

  if (is(node, $ValueNode())) {
    const {target, parameters, type} = extractDeclarationInfo(node.target);

    return {target, parameters, type, assign: node.value};
  }

  if (is(node, $LambdaNode())) {
    const {parameters: group, type, value: assign} = node;

    return {target: group, type, assign};
  }

  return {target: node};
}
