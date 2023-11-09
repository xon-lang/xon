import { Integer, String2 } from '~/lib/core';
import { IdNode, idNode, scanIdNode } from '~/parser/lexical/id/id-node';
import { KeywordNode } from '~/parser/lexical/keyword/keyword-node';
import { ModifierNode } from '~/parser/lexical/modifier/modifier-node';
import { NodeType, is } from '~/parser/lexical/node';
import { LexicalAnalysis } from '~/parser/parser';
import { operatorsOrders } from '~/parser/util/operators';
import { NonHiddenLexicalNode } from '../lexical-node';

export interface OperatorNode extends NonHiddenLexicalNode {
  $: NodeType.OPERATOR;
}

export function operatorNode(start: Integer, stop: Integer, text: String2): OperatorNode {
  return {
    $: NodeType.OPERATOR,
    hidden: [],
    start,
    stop,
    text,
  };
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
];

export function scanOperatorNode(analysis: LexicalAnalysis): OperatorNode | IdNode | ModifierNode | KeywordNode | null {
  const { index, text, lastStatementNodes: lastNodes } = analysis;
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
  const operatorStopIndex = index + operatorString.length - 1;
  const idCandidate = scanIdNode(analysis);

  if (idCandidate && idCandidate.stop > operatorStopIndex) {
    return idCandidate;
  }

  if (is(lastNodes.lastOrNull(), NodeType.MODIFIER)) {
    return idNode(index, operatorStopIndex, operatorString);
  }

  return operatorNode(index, operatorStopIndex, operatorString);
}
