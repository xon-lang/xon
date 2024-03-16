import {Nothing, String2, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {infixNode} from '../node/syntax/infix/infix-node';
import {memberNode} from '../node/syntax/member/member-node';
import {postfixNode} from '../node/syntax/postfix/postfix-node';
import {prefixNode} from '../node/syntax/prefix/prefix-node';
import {IdNode} from '../node/token/id/id-node';
import {OperatorNode} from '../node/token/operator/operator-node';
import {OperatorType, RecursiveType} from '../parser-config';
import {SyntaxContext} from '../syntax-context';

export function collapseOperator(
  context: SyntaxContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
  startIndex = 0,
): Nothing {
  for (let i = startIndex; i < context.nodes.length; i++) {
    const lastIndex = context.nodes.length - 1;
    const index = recursiveType === RecursiveType.LEFT ? i : lastIndex - i;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, $Node.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left: Node | Nothing = context.nodes[index - 1];
    const right: Node | Nothing = context.nodes[index + 1];

    if (operatorType === OperatorType.MEMBER) {
      if (left && !is<OperatorNode>(left, $Node.OPERATOR)) {
        const id = is<IdNode>(right, $Node.ID) ? right : nothing;
        const member = memberNode(context, operator, left, id);
        context.nodes.splice(index - 1, member.children.length, member);
        collapseOperator(context, operators, operatorType, recursiveType, i);
      }

      return;
    }

    if (operatorType === OperatorType.INFIX) {
      if (left && right && !is<OperatorNode>(left, $Node.OPERATOR) && !is<OperatorNode>(right, $Node.OPERATOR)) {
        const infix = infixNode(context, operator, left, right);
        context.nodes.splice(index - 1, 3, infix);
        collapseOperator(context, operators, operatorType, recursiveType, i);
      }

      return;
    }

    if (operatorType === OperatorType.PREFIX) {
      if (
        right &&
        !is<OperatorNode>(right, $Node.OPERATOR) &&
        (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
      ) {
        const prefix = prefixNode(context, operator, right);
        context.nodes.splice(index, 2, prefix);
        collapseOperator(context, operators, operatorType, recursiveType, i);
      }

      return;
    }

    if (operatorType === OperatorType.POSTFIX) {
      if (
        left &&
        !is<OperatorNode>(left, $Node.OPERATOR) &&
        (index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR))
      ) {
        const postfix = postfixNode(context, operator, left);
        context.nodes.splice(index - 1, 2, postfix);
        collapseOperator(context, operators, operatorType, recursiveType, i);
      }

      return;
    }
  }
}
