import {Integer, Nothing, String2} from '../../../lib/core';
import {$Node, is} from '../../node/node';
import {ArrayNode} from '../../node/syntax/array/array-node';
import {GroupNode} from '../../node/syntax/group/group-node';
import {invokeNode} from '../../node/syntax/invoke/invoke-node';
import {ObjectNode} from '../../node/syntax/object/object-node';
import {OperatorNode} from '../../node/token/operator/operator-node';
import {SyntaxContext} from '../../syntax-context';
import {$Operator, Operator, RecursiveType, operatorParams} from '../operator';

export interface InvokeOperator extends Operator {
  $: $Operator.INVOKE;
}

export function invokeOperator(operators: String2[]): InvokeOperator {
  return {
    ...operatorParams($Operator.INVOKE, RecursiveType.LEFT, operators),

    collapse(context: SyntaxContext, startIndex: Integer): Nothing {
      const foundNode =
        this.findNode<GroupNode>(context, startIndex, $Node.GROUP) ??
        this.findNode<ArrayNode>(context, startIndex, $Node.ARRAY) ??
        this.findNode<ObjectNode>(context, startIndex, $Node.OBJECT);

      if (!foundNode) {
        return;
      }

      const {index} = foundNode;

      const instance = context.nodes[index - 1];

      if (index > 0 && instance && !is<OperatorNode>(instance, $Node.OPERATOR)) {
        const node = invokeNode(context, instance, foundNode.node);

        context.nodes.splice(index - 1, node.children.length, node);
        this.collapse(context, index);
      }
    },
  };
}
