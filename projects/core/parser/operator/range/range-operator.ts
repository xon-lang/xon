import {Integer, Nothing, String2, nothing} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {rangeNode} from '../../node/syntax/range/range-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface RangeOperator extends Operator {
  $: $Operator.RANGE;
}

export function rangeOperator(operators: String2[]): RangeOperator {
  return {
    ...operatorParams($Operator.RANGE, RecursiveType.LEFT, operators),

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundOperator = this.findOperatorNode(context, startIndex, this.operators);

      if (!foundOperator) {
        return;
      }

      const {index, operator} = foundOperator;
      const left = context.nodes[index - 1];
      const right = context.nodes[index + 1];

      if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
        return nothing;
      }

      const node = rangeNode(context, left, operator, right);

      context.nodes.splice(index - 1, node.children.length, node);
      this.collapse(context, index);
    },
  };
}
