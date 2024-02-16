import { String2 } from '../../../lib/core';
import { scanIdNode } from '../../../parser/node/id/id-node';
import { Node } from '../../../parser/node/node';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { operatorsOrders } from '../../parser-config';
import { $Node, TokenNode } from '../node';

export interface OperatorNode extends TokenNode {
  $: $Node.OPERATOR;
}

export function operatorNode(range: SourceRange, text: String2): OperatorNode {
  return {
    $: $Node.OPERATOR,
    range,
    text,
  };
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
];

export function scanOperatorNode(context: ParserContext): Node | null {
  const { position, source } = context;
  let operators = OPERATORS.filter((x) => x[0] === source.text[position.index]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = position.index; i < source.text.length; i++) {
    operators = operators.filter((x) => x[i - position.index] === source.text[i]);
    const candidate = operators.find((x) => x.length === i - position.index + 1);

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

  const text = candidates[candidates.length - 1];
  const id = scanIdNode(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length);

  return operatorNode(range, text);
}
