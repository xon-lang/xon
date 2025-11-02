import {
  $InvokeNode,
  $LambdaNode,
  $TypeNode,
  $ValueNode,
  GroupNode,
  Node,
  OperatorExpressionNode,
} from '#analyzer';
import {is, Nothing} from '#core';

export type ExtractedDeclarationInfo = {
  target?: Node | Nothing;
  group?: GroupNode | Nothing;
  // groups?: ArrayData<GroupNode> | Nothing;
  annotation?: OperatorExpressionNode | Nothing;
  assignment?: OperatorExpressionNode | Nothing;
};

export function extractDeclarationInfo(node: Node | Nothing): ExtractedDeclarationInfo {
  if (!node) {
    return {};
  }

  if (is(node, $InvokeNode())) {
    return node;
  }

  if (is(node, $TypeNode())) {
    const {target, group} = extractDeclarationInfo(node.target);

    return {target, group, annotation: node.type};
  }

  if (is(node, $ValueNode())) {
    const {target, group: group, annotation} = extractDeclarationInfo(node.target);

    return {target, group: group, annotation, assignment: node.value};
  }

  if (is(node, $LambdaNode())) {
    const {group, type, value} = node;

    return {target: group, annotation: type, assignment: value};
  }

  return {target: node};
}
