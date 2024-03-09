import {Nothing, String2, nothing} from '../../../../lib/core';
import {Semantic} from '../../../../semantic/semantic';
import {SourceRange} from '../../../../source/source-range';
import {CONTROL_KEYWORDS, MODIFIER_KEYWORDS, OPERATOR_KEYWORDS, operatorsOrders} from '../../../syntax-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {scanIdNode} from '../id/id-node';
import {TokenNode, tokenNode} from '../token-node';

export enum KeywordType {
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
  OPERATOR = 'OPERATOR',
}

export interface OperatorNode extends TokenNode {
  $: $Node.OPERATOR;
  keywordType: KeywordType | Nothing;
  semantic?: Semantic | Nothing;
}

export function operatorNode(context: SyntaxContext, range: SourceRange, text: String2): OperatorNode {
  const token = tokenNode($Node.OPERATOR, range, text);
  const keywordType = getKeywordType(text);

  const node = {
    ...token,
    keywordType,
  };

  context.operators.push(node);

  return node;
}

const OPERATORS = [
  ...new Set(operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators)),
].sort((a, b) => a.length - b.length);

export function scanOperatorNode(context: SyntaxContext): Node | Nothing {
  const {position, source} = context;
  const text = OPERATORS.findLast((x) => x === source.text.slice(position.index, position.index + x.length));

  if (!text) {
    return nothing;
  }

  const id = scanIdNode(context);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = context.getRange(text.length, false);

  return operatorNode(context, range, text);
}

function getKeywordType(text: String2): KeywordType | Nothing {
  if (MODIFIER_KEYWORDS.includes(text)) {
    return KeywordType.MODIFIER;
  }

  if (CONTROL_KEYWORDS.includes(text)) {
    return KeywordType.CONTROL;
  }

  if (OPERATOR_KEYWORDS.includes(text)) {
    return KeywordType.OPERATOR;
  }
}
