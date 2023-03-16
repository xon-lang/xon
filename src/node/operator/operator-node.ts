import { operatorsOrders } from '~/compiler/parser/parser-config';
import { Char, Integer, String2 } from '~/lib/core';
import { IdNode, scanIdNode } from '~/node/id/id-node';
import { NodeType, TokenNode } from '~/node/node';

export interface OperatorNode extends TokenNode {
  type: NodeType.OPERATOR;
}

export function operatorNode(start: Integer, stop: Integer, text: String2): OperatorNode {
  return {
    type: NodeType.OPERATOR,
    start,
    stop,
    text,
  };
}

const OPERATORS = [
  ...new Set(
    operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators.split(' ')),
  ),
];

export function scanOperatorNode(chars: Char[], index: Integer): OperatorNode | IdNode | null {
  let operators = OPERATORS.filter((x) => x[0] === chars[index]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = index; i < chars.length; i++) {
    operators = operators.filter((x) => x[i - index] === chars[i]);
    const candidate = operators.find((x) => x.length === i - index + 1);
    if (candidate) {
      candidates.push(candidate);
    }
    if (operators.length === 0) {
      break;
    }
  }
  if (candidates.length === 0) {
    return null;
  }
  const operatorString = candidates[candidates.length - 1];
  const idCandidate = scanIdNode(chars, index);
  const operatorStopIndex = index + operatorString.length - 1;
  const operatorCandidate = operatorNode(index, operatorStopIndex, chars.slice(index, operatorStopIndex + 1).join(''));
  if (idCandidate && idCandidate.stop > operatorCandidate.stop) {
    return idCandidate;
  }
  return operatorCandidate;
}
