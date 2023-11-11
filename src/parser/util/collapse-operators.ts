import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { postfixNode } from '~/parser/node/postfix/postfix-node';
import { prefixNode } from '~/parser/node/prefix/prefix-node';
import { OperatorType } from '~/parser/util/operators';
import { NodeType } from '../node/node-type';
import { handleInfix } from './handle-infix';
import { is } from './is';

export function collapseOperators(nodes: Node[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;

  const operator = nodes[operatorIndex];

  if (!is<OperatorNode>(operator, NodeType.OPERATOR)) {
    return;
  }

  if (operatorType === OperatorType.PREFIX) {
    const right = nodes[operatorIndex + 1] as Node;

    if (!right) {
      throw new Error('Not implemented');
    }

    const prefix = prefixNode(operator, right);
    nodes[operatorIndex] = prefix;
    nodes.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = nodes[operatorIndex - 1] as Node;

    if (!left) {
      throw new Error('Not implemented');
    }

    const postfix = postfixNode(operator, left);
    nodes[operatorIndex] = postfix;
    nodes.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = nodes[operatorIndex - 1] as Node;
    const right = nodes[operatorIndex + 1] as Node;

    if (!left || !right) {
      throw new Error('Not implemented');
    }

    const infix = handleInfix(operator, left, right);
    nodes[operatorIndex] = infix;
    nodes.splice(operatorIndex - 1, 1);
    nodes.splice(operatorIndex, 1);
  }
}
