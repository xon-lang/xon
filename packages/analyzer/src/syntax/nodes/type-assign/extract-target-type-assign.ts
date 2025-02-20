import {$AssignNode, $TypeNode, AssignValueNode, Node, TypeValueNode} from '#analyzer';
import {Nothing} from '#common';
import {is} from '#typing';

export function extractTargetTypeAssign(node: Node | Nothing): {
  target?: Node | Nothing;
  type?: TypeValueNode | Nothing;
  assign?: AssignValueNode | Nothing;
} {
  if (!node) {
    return {};
  }

  if (is(node, $TypeNode())) {
    return {target: node.target, type: node.type};
  }

  if (is(node, $AssignNode())) {
    const {target, type} = extractTargetTypeAssign(node.target);
    return {target, type, assign: node.assign};
  }

  return {};
}
