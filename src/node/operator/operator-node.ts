import { operatorsOrders } from '~/compiler/parser/parser-config';
import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { scanIdNode } from '~/node/id/id-node';
import { Node, NodeType } from '~/node/node';

export interface OperatorNode extends Node {}

export function operatorNode(startIndex: Integer, stopIndex: Integer): OperatorNode {
  return {
    type: NodeType.OPERATOR,
    startIndex,
    stopIndex,
  };
}

const OPERATORS = [
  ...new Set(
    operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators.split(' ')),
  ),
];

export function scanOperatorNode(source: Source, startIndex: Integer, stopIndex: Integer): OperatorNode | null {
  let operators = OPERATORS.filter((x) => x[0] === source.text[startIndex]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    operators = operators.filter((x) => x[i - startIndex] === source.text[i]);
    const candidate = operators.find((x) => x.length === i - startIndex + 1);
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
  const idCandidate = scanIdNode(source, startIndex, stopIndex);
  const operatorCandidate = operatorNode(startIndex, startIndex + operatorString.length - 1);
  if (idCandidate && idCandidate.stopIndex > operatorCandidate.stopIndex) {
    return idCandidate;
  }
  return operatorCandidate;
}
