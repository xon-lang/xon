import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { operatorsOrders } from '../../syntax-config';
import { SyntaxContext } from '../../syntax-context';
import { scanIdNode } from '../id/id-node';
import { $Node, Node, TokenNode } from '../node';

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
].sort((a, b) => a.length - b.length);

export function scanOperatorNode(context: SyntaxContext): Node | null {
  const { position, source } = context;
  const text = OPERATORS.findLast((x) => x === source.text.slice(position.index, position.index + x.length));

  if (!text) {
    return null;
  }

  const id = scanIdNode(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length);

  return operatorNode(range, text);
}
