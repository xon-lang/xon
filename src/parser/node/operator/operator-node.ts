import { String2 } from '../../../lib/core';
import { idNode, scanIdNode } from '../../../parser/node/id/id-node';
import { Node } from '../../../parser/node/node';
import { ParserContext } from '../../../parser/parser-context';
import { is } from '../../../parser/util/is';
import { operatorsOrders } from '../../../parser/util/operators';
import { SourceRange } from '../../../source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface OperatorNode extends TokenNode {
  $: NodeType.OPERATOR;
}

export function operatorNode(range: SourceRange, text: String2): OperatorNode {
  return {
    $: NodeType.OPERATOR,
    range,
    text,
  };
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
];

export function scanOperatorNode(context: ParserContext): Node | null {
  const { index, source, nodes: lastStatementNodes } = context;
  let operators = OPERATORS.filter((x) => x[0] === source.text[index]);

  if (operators.length === 0) {
    return null;
  }

  const candidates: String2[] = [];

  for (let i = index; i < source.text.length; i++) {
    operators = operators.filter((x) => x[i - index] === source.text[i]);
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

  const text = candidates[candidates.length - 1];
  const id = scanIdNode(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length);

  if (is(lastStatementNodes.lastOrNull(), NodeType.MODIFIER)) {
    return idNode(range, text);
  }

  return operatorNode(range, text);
}
