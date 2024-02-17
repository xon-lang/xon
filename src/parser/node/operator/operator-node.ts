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
  const candidates: String2[] = [];
  let operators = OPERATORS;

  for (let i = position.index, j = 0; i < source.text.length; i++, j++) {
    operators = operators.filter((x) => x[j] === source.text[i]);

    if (operators.length === 0) {
      break;
    }

    const candidate = operators.find((x) => x.length === j + 1);

    if (candidate) {
      candidates.push(candidate);
    }
  }

  if (candidates.length === 0) {
    return null;
  }

  const text = candidates.last();
  const id = scanIdNode(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length);

  return operatorNode(range, text);
}
