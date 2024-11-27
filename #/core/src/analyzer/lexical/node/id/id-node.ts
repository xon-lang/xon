import {Nothing, TextData, TextReference} from '#common';
import {
  DeclarationSemantic,
  DocumentationIdSemantic,
  ExpressionNode,
  IdTypeSemantic,
  IdValueSemantic,
  LexicalNode,
  lexicalNode,
} from '#core';
import {$} from '#typing';

export type IdNode = LexicalNode<$.IdNode> &
  ExpressionNode & {
    semantic?: IdValueSemantic | IdTypeSemantic | DeclarationSemantic | DocumentationIdSemantic | Nothing;
  };

export function idNode(reference: TextReference, text: TextData): IdNode {
  return lexicalNode($.IdNode, {reference, text});
}
