import {Integer, Nothing, String2} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {importNode} from '../../node/syntax/import/import-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {StringNode} from '../../node/token/string/string-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface ImportOperator extends Operator {
  $: $Operator.IMPORT;
}

export function importOperator(operators: String2[]): ImportOperator {
  return {
    ...operatorParams($Operator.IMPORT, RecursiveType.RIGHT, operators),
    operators,

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundOperator = this.findOperatorNode(context, startIndex, this.operators);

      if (!foundOperator) {
        return;
      }

      const {index, operator} = foundOperator;
      const left = context.nodes[index - 1];
      const right = context.nodes[index + 1];

      if (is<StringNode>(right, $Node.STRING) && (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))) {
        const node = importNode(context, operator, right);

        context.nodes.splice(index, node.children.length, node);
        this.collapse(context, index);
      }
    },
  };
}
