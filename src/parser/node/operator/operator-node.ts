import { String2 } from '~/lib/core';
import { IdNode, idNode, scanIdNode } from '~/parser/node/id/id-node';
import { KeywordNode } from '~/parser/node/keyword/keyword-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { operatorsOrders } from '~/parser/util/operators';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface OperatorNode extends TokenNode {
  $: NodeType.OPERATOR;
}

export function operatorNode(text: String2): Partial<OperatorNode> {
  return {
    $: NodeType.OPERATOR,
    text,
  };
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
];

export function scanOperatorNode(parser: Parser): Partial<OperatorNode | IdNode | ModifierNode | KeywordNode> | null {
  const { index, text, lastStatementNodes: lastNodes } = parser;
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
  const idCandidate = scanIdNode(parser);

  if (idCandidate && idCandidate.text && idCandidate.text.length > operatorString.length) {
    return idCandidate;
  }

  if (is(lastNodes.lastOrNull(), NodeType.MODIFIER)) {
    return idNode(operatorString);
  }

  return operatorNode(operatorString);
}
