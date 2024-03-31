import {Integer, Nothing, String2, nothing} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {postfixNode} from '../../node/syntax/postfix/postfix-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface PostfixOperator extends Operator {
  $: $Operator.POSTFIX;
}

export function postfixOperator(operators: String2[]): PostfixOperator {
  return {
    ...operatorParams($Operator.POSTFIX, RecursiveType.LEFT, operators),

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundOperator = this.findOperatorNode(context, startIndex, this.operators);

      if (!foundOperator) {
        return;
      }

      const {index, operator} = foundOperator;
      const lastIndex = context.nodes.length - 1;
      const left = context.nodes[index - 1];
      const right = context.nodes[index + 1];

      if (
        !left ||
        is<OperatorNode>(left, $Node.OPERATOR) ||
        !(index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR))
      ) {
        return nothing;
      }

      const node = postfixNode(context, left, operator);

      context.nodes.splice(index - 1, node.children.length, node);
      this.collapse(context, index);
    },
  };
}
