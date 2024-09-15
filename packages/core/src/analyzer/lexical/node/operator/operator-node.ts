import {$} from '../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {ExpressionNode} from '../../../node';
import {CONTROL_KEYWORDS, MODIFIER_KEYWORDS, OPERATOR_KEYWORDS} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

export type OperatorNode = LexicalNode<$.OperatorNode> & ExpressionNode;
// & {
//   keywordType: KeywordType | Nothing;
// };

export function operatorNode(reference: TextResourceRange, text: TextData): OperatorNode {
  return lexicalNode({$: $.OperatorNode, reference, text}); //, keywordType: getKeywordType(text)
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
