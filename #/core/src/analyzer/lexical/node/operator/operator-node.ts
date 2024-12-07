import {Nothing, TextData, TextReference} from '#common';
import {
  $LexicalNode,
  CONTROL_KEYWORDS,
  corePackageType,
  LexicalNode,
  lexicalNode,
  MODIFIER_KEYWORDS,
  OPERATOR_KEYWORDS,
} from '#core';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

// todo should be as OperatorContentNode ???
export type OperatorNode = LexicalNode;

export const $OperatorNode = corePackageType<OperatorNode>('OperatorNode', $LexicalNode);

export function operatorNode(reference: TextReference, text: TextData): OperatorNode {
  return lexicalNode({$: $LexicalNode, reference, text, isExpression: true});
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
