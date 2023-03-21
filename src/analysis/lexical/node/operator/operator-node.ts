import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { IdNode, scanIdNode } from '~/analysis/lexical/node/id/id-node';
import { KeywordNode } from '~/analysis/lexical/node/keyword/keyword-node';
import { ModifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { NodeType } from '~/analysis/node';
import { operatorsOrders } from '~/analysis/syntax/operators';
import { Integer, String2 } from '~/lib/core';

export interface OperatorNode extends LexicalNode {}

export function operatorNode(start: Integer, stop: Integer, text: String2): OperatorNode {
  return {
    $: NodeType.OPERATOR,
    start,
    stop,
    text,
  };
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
];

export function scanOperatorNode(analysis: LexicalAnalysis): OperatorNode | IdNode | ModifierNode | KeywordNode | null {
  const { index, text } = analysis;
  let operators = OPERATORS.filter((x) => x[0] === text[index]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = index; i < text.length; i++) {
    operators = operators.filter((x) => x[i - index] === text[i]);
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
  const idCandidate = scanIdNode(analysis);
  const operatorStopIndex = index + operatorString.length - 1;
  const operatorCandidate = operatorNode(index, operatorStopIndex, text.slice(index, operatorStopIndex + 1));
  if (idCandidate && idCandidate.stop > operatorCandidate.stop) {
    return idCandidate;
  }

  return operatorCandidate;
}
