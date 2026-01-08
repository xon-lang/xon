import {
  $AnalyzerType,
  $ExpressionNode,
  DeclarationSemantic,
  ExpressionNode,
  lexicalDebug,
  LexicalNode,
  newSyntaxNode,
  nodesRange,
  semantifyIdNode,
  UsageSemantic,
} from '#analyzer';
import {Brand, Nothing, Text} from '#core';

export type IdNode = ExpressionNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: UsageSemantic | DeclarationSemantic | Nothing;
    token: LexicalNode;

    getText(): Text;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $ExpressionNode());

export function newIdNode(token: LexicalNode): IdNode {
  return newSyntaxNode({
    $: $IdNode(),
    range: nodesRange(token),
    token,

    // todo remove 'getText'
    getText(): Text {
      return this.token.text;
    },

    debug: lexicalDebug,
    semantify: semantifyIdNode,
  });
}
