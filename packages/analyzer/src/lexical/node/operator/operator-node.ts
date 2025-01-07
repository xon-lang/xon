import {
  $LexicalNode,
  analyzerPackageType,
  CONTROL_KEYWORDS,
  LexicalNode,
  lexicalNode,
  MODIFIER_KEYWORDS,
  OPERATOR_KEYWORDS,
} from '#analyzer';
import {Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export enum KeywordType {
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  CONTROL = 'CONTROL',
}

// todo should be as OperatorContentNode ???
export type OperatorNode = LexicalNode & Brand<'Analyzer.OperatorNode'>;

export const $OperatorNode = analyzerPackageType<OperatorNode>('OperatorNode', $LexicalNode);

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
