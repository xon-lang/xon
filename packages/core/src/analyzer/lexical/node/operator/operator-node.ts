import {Nothing, String2, TextData, TextReference} from '#common';
import {
  CONTROL_KEYWORDS,
  ExpressionNode,
  LexicalNode,
  lexicalNode,
  MODIFIER_KEYWORDS,
  OPERATOR_KEYWORDS,
} from '#core';
import {$} from '#typing';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

export type OperatorNode = LexicalNode<$.OperatorNode> & ExpressionNode;
// & {
//   keywordType: KeywordType | Nothing;
// };

export function operatorNode(reference: TextReference, text: TextData): OperatorNode {
  return lexicalNode($.OperatorNode, {reference, text}); //, keywordType: getKeywordType(text)
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