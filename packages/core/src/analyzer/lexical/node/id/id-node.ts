import {Nothing} from '#common';
import {
  $,
  DeclarationSemantic,
  DocumentationIdSemantic,
  ExpressionNode,
  IdTypeSemantic,
  IdValueSemantic,
  LexicalNode,
  TextData,
  TextResourceRange,
  lexicalNode,
} from '#core';

export type IdNode = LexicalNode<$.IdNode> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | DocumentationIdSemantic | Nothing;
  };

export function idNode(reference: TextResourceRange, text: TextData): IdNode {
  return lexicalNode({$: $.IdNode, reference, text});
}
