import {Nothing, TextData, TextReference} from '#common';
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

function getKeywordType(text: TextData): KeywordType | Nothing {
  if (MODIFIER_KEYWORDS.hasItem(text)) {
    return KeywordType.MODIFIER;
  }

  if (CONTROL_KEYWORDS.hasItem(text)) {
    return KeywordType.CONTROL;
  }

  if (OPERATOR_KEYWORDS.hasItem(text)) {
    return KeywordType.OPERATOR;
  }
}
