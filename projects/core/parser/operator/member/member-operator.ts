import {Integer, Nothing, String2, nothing} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {memberNode} from '../../node/syntax/member/member-node';
import {IdNode} from '../../node/token/id/id-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface MemberOperator extends Operator {
  $: $Operator.MEMBER;
}

export function memberOperator(operators: String2[]): MemberOperator {
  return {
    ...operatorParams($Operator.MEMBER, RecursiveType.LEFT, operators),

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundOperator = this.findOperatorNode(context, startIndex, this.operators);

      if (!foundOperator) {
        return;
      }

      const {index, operator} = foundOperator;
      const left = context.nodes[index - 1];
      const right = context.nodes[index + 1];

      if (!left || is<OperatorNode>(left, $Node.OPERATOR)) {
        return nothing;
      }

      const id = is<IdNode>(right, $Node.ID) ? right : nothing;
      const node = memberNode(context, operator, left, id);

      context.nodes.splice(index - 1, node.children.length, node);
      this.collapse(context, index);
    },
  };
}
