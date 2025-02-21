import {
  $AssignNode,
  $InvokeNode,
  $LambdaNode,
  $TypeNode,
  AssignValueNode,
  GroupNode,
  Node,
  TypeValueNode,
} from '#analyzer';
import {Nothing} from '#common';
import {is} from '#typing';

export type ExtractedDeclarationInfo = {
  target?: Node | Nothing;
  parameters?: GroupNode | Nothing;
  type?: TypeValueNode | Nothing;
  assign?: AssignValueNode | Nothing;
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
    const {group, type, assign} = node;

    return {target: group, type, assign};
  }

  return {target: node};
}
