import {Nothing, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {CONTROL_KEYWORDS, MODIFIER_KEYWORDS, OPERATOR_KEYWORDS} from '../../../parser-config';
import {$Node, ExpressionNode} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

export type OperatorNode = TokenNode<$Node.OPERATOR> &
  ExpressionNode & {
    keywordType: KeywordType | Nothing;
  };

export function operatorNode(range: TextRange, text: String2): OperatorNode {
  return tokenNode({$: $Node.OPERATOR, range, text, keywordType: getKeywordType(text)});
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
