import {
  $AnalyzerType,
  $SyntaxNode,
  FormatterContext,
  GroupNode,
  highlightDeclarationStatementNode,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  OperatorExpressionNode,
  semantifyDeclarationStatementNode,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type DeclarationStatementNode = SyntaxNode &
  Brand<'Analyzer.DeclarationStatementNode'> & {
    keyword?: KeywordNode | Nothing;
    id: IdNode;
    group?: GroupNode | Nothing;
    annotation?: OperatorExpressionNode | Nothing;
    assignment?: OperatorExpressionNode | Nothing;
  };

export const $DeclarationStatementNode = () =>
  $AnalyzerType<DeclarationStatementNode>('DeclarationStatementNode', $SyntaxNode());

export function newDeclarationStatementNode(
  keyword: KeywordNode | Nothing,
  id: IdNode, // todo in future {a, b, c}; [a, b, c]
  parameters?: GroupNode | Nothing,
  annotation?: OperatorExpressionNode | Nothing,
  assignment?: OperatorExpressionNode | Nothing,
): DeclarationStatementNode {
  return newSyntaxNode<DeclarationStatementNode>({
    $: $DeclarationStatementNode(),
    keyword,
    id,
    group: parameters,
    annotation,
    assignment,

    semantify: semantifyDeclarationStatementNode,
    format(context: FormatterContext): void {},
    highlight: highlightDeclarationStatementNode,
  });
}
