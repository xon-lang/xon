import {
  $AssignNode,
  $InvokeNode,
  $LambdaNode,
  $TypeNode,
  AssignExpressionNode,
  GroupNode,
  Node,
  TypeExpressionNode,
} from '#analyzer';
import {Nothing} from '#common';
import {is} from '#typing';

export type ExtractedDeclarationInfo = {
  target?: Node | Nothing;
  parameters?: GroupNode | Nothing;
  type?: TypeExpressionNode | Nothing;
  assign?: AssignExpressionNode | Nothing;
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

  if (is(node, $AssignNode())) {
    const {target, parameters, type} = extractDeclarationInfo(node.target);

    return {target, parameters, type, assign: node.assign};
  }

  if (is(node, $LambdaNode())) {
    const {parameters: group, type, assign} = node;

    return {target: group, type, assign};
  }

  return {target: node};
}
