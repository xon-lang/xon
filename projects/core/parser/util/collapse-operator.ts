import {Array2, Integer, Nothing, String2, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {isGroupNode} from '../node/syntax/group/group-node';
import {importNode} from '../node/syntax/import/import-node';
import {infixNode} from '../node/syntax/infix/infix-node';
import {invokeNode} from '../node/syntax/invoke/invoke-node';
import {memberNode} from '../node/syntax/member/member-node';
import {postfixNode} from '../node/syntax/postfix/postfix-node';
import {prefixNode} from '../node/syntax/prefix/prefix-node';
import {rangeNode} from '../node/syntax/range/range-node';
import {SyntaxNode} from '../node/syntax/syntax-node';
import {IdNode} from '../node/token/id/id-node';
import {OperatorNode} from '../node/token/operator/operator-node';
import {StringNode} from '../node/token/string/string-node';
import {OperatorType, RecursiveType} from '../parser-config';
import {SyntaxContext} from '../syntax-context';

type CollapseFn = (
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
) => {spliceIndex: Integer; node: SyntaxNode} | Nothing;

const COLLAPSE_FUNCTIONS: Record<Integer, CollapseFn | Nothing> = {
  // todo never called from here fix it
  [OperatorType.INVOKE]: invokeCollapse,
  [OperatorType.IMPORT]: importCollapse,
  [OperatorType.MEMBER]: memberCollapse,
  [OperatorType.RANGE]: rangeCollapse,
  [OperatorType.INFIX]: infixCollapse,
  [OperatorType.PREFIX]: prefixCollapse,
  [OperatorType.POSTFIX]: postfixCollapse,
};

export function collapseOperator(
  context: SyntaxContext,
  operators: Array2<String2>,
  operatorType: OperatorType,
  recursiveType: RecursiveType,
  startIndex = 0,
): Nothing {
  for (let i = startIndex; i < context.nodes.length; i++) {
    const lastIndex = context.nodes.length - 1;
    const index = recursiveType === RecursiveType.LEFT ? i : lastIndex - i;

    if (operatorType === OperatorType.INVOKE) {
      const result = invokeCollapse(context, index);

      if (result) {
        context.nodes.splice(result.spliceIndex, result.node.children.length, result.node);
        collapseOperator(context, operators, operatorType, recursiveType, i);
      }
    }

    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, $Node.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right = context.nodes[index + 1];

    const collapse = COLLAPSE_FUNCTIONS[operatorType];

    if (!collapse) {
      return;
    }

    const result = collapse(context, index, left, operator, right);

    if (result) {
      context.nodes.splice(result.spliceIndex, result.node.children.length, result.node);
      collapseOperator(context, operators, operatorType, recursiveType, i);
    }
  }
}

function importCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  if (is<StringNode>(right, $Node.STRING) && (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))) {
    const node = importNode(context, operator, right);

    return {spliceIndex: index, node};
  }

  return nothing;
}

function memberCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  if (!left || is<OperatorNode>(left, $Node.OPERATOR)) {
    return nothing;
  }

  const id = is<IdNode>(right, $Node.ID) ? right : nothing;
  const node = memberNode(context, operator, left, id);

  return {spliceIndex: index - 1, node};
}

function rangeCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
    return nothing;
  }

  const node = rangeNode(context, left, operator, right);

  return {spliceIndex: index - 1, node};
}

function infixCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
    return nothing;
  }

  const node = infixNode(context, left, operator, right);

  return {spliceIndex: index - 1, node};
}

function prefixCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  if (right && !is<OperatorNode>(right, $Node.OPERATOR) && (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))) {
    const node = prefixNode(context, operator, right);

    return {spliceIndex: index, node};
  }

  return nothing;
}

function postfixCollapse(
  context: SyntaxContext,
  index: Integer,
  left: Node | Nothing,
  operator: OperatorNode,
  right: Node | Nothing,
): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  const lastIndex = context.nodes.length - 1;

  if (
    left &&
    !is<OperatorNode>(left, $Node.OPERATOR) &&
    (index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR))
  ) {
    const node = postfixNode(context, left, operator);

    return {spliceIndex: index - 1, node};
  }

  return nothing;
}

function invokeCollapse(context: SyntaxContext, index: Integer): {spliceIndex: Integer; node: SyntaxNode} | Nothing {
  const instance = context.nodes[index - 1];
  const group = context.nodes[index];

  if (index > 0 && instance && isGroupNode(group) && !is<OperatorNode>(instance, $Node.OPERATOR)) {
    const node = invokeNode(context, instance, group);

    return {spliceIndex: index - 1, node};
  }

  return nothing;
}
