import { Integer } from '~/lib/core';
import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { OperatorType } from '~/node/lexical/operators';
import { Node, NodeType, is } from '~/node/node';
import { postfixNode } from '~/node/syntactic/postfix/postfix-node';
import { prefixNode } from '~/node/syntactic/prefix/prefix-node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { handleInfix } from './handle-infix';


export function collapseOperators(nodes: Node[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;
  const operator = nodes[operatorIndex];
  if (!is<OperatorNode>(operator, NodeType.OPERATOR)) {
    return;
  }

  if (operatorType === OperatorType.PREFIX) {
    const right = nodes[operatorIndex + 1] as SyntacticNode;

    if (!right) {
      throw new Error('Not implemented');
    }

    const prefix = prefixNode(operator, right);
    nodes[operatorIndex] = prefix;
    nodes.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = nodes[operatorIndex - 1] as SyntacticNode;

    if (!left) {
      throw new Error('Not implemented');
    }

    const postfix = postfixNode(operator, left);
    nodes[operatorIndex] = postfix;
    nodes.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = nodes[operatorIndex - 1] as SyntacticNode;
    const right = nodes[operatorIndex + 1] as SyntacticNode;

    if (!left || !right) {
      throw new Error('Not implemented');
    }

    const infix = handleInfix(operator, left, right);
    nodes[operatorIndex] = infix;
    nodes.splice(operatorIndex - 1, 1);
    nodes.splice(operatorIndex, 1);
  }
}
