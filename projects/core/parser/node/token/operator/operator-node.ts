import {Nothing, String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {CONTROL_KEYWORDS, MODIFIER_KEYWORDS, OPERATOR_KEYWORDS} from '../../../parser-config';
import {$Node} from '../../node';
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

export function operatorNode(range: TextResourceRange, text: String2): OperatorNode {
  const token = tokenNode($Node.OPERATOR, {range, text});
  const keywordType = getKeywordType(text);

  const node = {
    ...token,
    keywordType,
  };

  return node;
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
