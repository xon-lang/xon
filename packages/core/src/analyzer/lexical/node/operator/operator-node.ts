import {Nothing, Text, TextReference} from '#common';
import {
  $LexicalNode,
  CONTROL_KEYWORDS,
  corePackageType,
  LexicalNode,
  lexicalNode,
  MODIFIER_KEYWORDS,
  OPERATOR_KEYWORDS,
} from '#core';
import {Brand} from '#typing';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

// todo should be as OperatorContentNode ???
export type OperatorNode = LexicalNode & Brand<'Core.OperatorNode'>;

export const $OperatorNode = corePackageType<OperatorNode>('OperatorNode', $LexicalNode);

export function operatorNode(reference: TextReference, text: Text): OperatorNode {
  return lexicalNode({$: $OperatorNode, reference, text});
}

function getKeywordType(text: Text): KeywordType | Nothing {
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
