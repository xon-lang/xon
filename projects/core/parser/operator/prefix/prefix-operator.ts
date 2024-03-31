import {Integer, Nothing, String2, nothing} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {prefixNode} from '../../node/syntax/prefix/prefix-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface PrefixOperator extends Operator {
  $: $Operator.PREFIX;
}

export function prefixOperator(
  operators: String2[],
  recursiveType: RecursiveType = RecursiveType.LEFT,
): PrefixOperator {
  return {
    ...operatorParams($Operator.PREFIX, recursiveType, operators),

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundOperator = this.findOperatorNode(context, startIndex, this.operators);

      if (!foundOperator) {
        return;
      }

      const {index, operator} = foundOperator;
      const left = context.nodes[index - 1];
      const right = context.nodes[index + 1];

      if (
        !right ||
        is<OperatorNode>(right, $Node.OPERATOR) ||
        !(index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
      ) {
        return nothing;
      }

      const node = prefixNode(context, operator, right);

      context.nodes.splice(index, node.children.length, node);
      this.collapse(context, index);
    },
  };
}
