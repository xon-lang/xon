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
  annotation?: OperatorExpressionNode | Nothing;
  assignment?: OperatorExpressionNode | Nothing;
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

    return {target, parameters, annotation: node.type};
  }

  if (is(node, $ValueNode())) {
    const {target, parameters, annotation} = extractDeclarationInfo(node.target);

    return {target, parameters, annotation: annotation, assignment: node.value};
  }

  if (is(node, $LambdaNode())) {
    const {parameters: group, type, value} = node;

    return {target: group, annotation: type, assignment: value};
  }

  return {target: node};
}
