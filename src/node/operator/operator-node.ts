import { operatorsOrders } from '~/compiler/parser/parser-config';
import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
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

export function scanOperatorNode(source: Source, start: Integer, stop: Integer): OperatorNode | IdNode | null {
  let operators = OPERATORS.filter((x) => x[0] === source.text[start]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = start; i <= stop; i++) {
    operators = operators.filter((x) => x[i - start] === source.text[i]);
    const candidate = operators.find((x) => x.length === i - start + 1);
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
  const idCandidate = scanIdNode(source, start, stop);
  const operatorStopIndex = start + operatorString.length - 1;
  const operatorCandidate = operatorNode(start, operatorStopIndex, source.textBetweenIndices(start, operatorStopIndex));
  if (idCandidate && idCandidate.stop > operatorCandidate.stop) {
    return idCandidate;
  }
  return operatorCandidate;
}
