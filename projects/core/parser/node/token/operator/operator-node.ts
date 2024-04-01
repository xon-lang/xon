import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {CONTROL_KEYWORDS, MODIFIER_KEYWORDS, OPERATORS, OPERATOR_KEYWORDS} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {idNodeParse} from '../id/id-node';
import {TokenNode, tokenNode} from '../token-node';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

export interface OperatorNode extends TokenNode {
  $: $Node.OPERATOR;
  keywordType: KeywordType | Nothing;
}

export function operatorNode(context: SyntaxContext, range: TextResourceRange, text: String2): OperatorNode {
  const token = tokenNode($Node.OPERATOR, {range, text});
  const keywordType = getKeywordType(text);

  const node = {
    ...token,
    keywordType,
  };

  return node;
}

export function operatorNodeParse(context: SyntaxContext): Node | Nothing {
  const {position, resource: source} = context;
  const text = OPERATORS.findLast((x) => x === source.data.slice(position.index, position.index + x.length));

  if (!text) {
    return nothing;
  }

  const id = idNodeParse(context);

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
