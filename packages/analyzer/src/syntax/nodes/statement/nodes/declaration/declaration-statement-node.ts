import {
  $AnalyzerType,
  $StatementNode,
  FormatterContext,
  GroupNode,
  highlightDeclarationStatementNode,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  OperatorExpressionNode,
  semantifyDeclarationStatementNode,
  StatementNode,
} from '#analyzer';
import {Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type DeclarationStatementNode = StatementNode &
  Brand<'Analyzer.DeclarationStatementNode'> & {
    keyword?: KeywordNode | Nothing;
    id: IdNode;
    group?: GroupNode | Nothing;
    annotation?: OperatorExpressionNode | Nothing;
    assignment?: OperatorExpressionNode | Nothing;
  };

export const $DeclarationStatementNode = () =>
  $AnalyzerType<DeclarationStatementNode>('DeclarationStatementNode', $StatementNode());

export function newDeclarationStatementNode(
  indent: Integer,
  keyword: KeywordNode | Nothing,
  id: IdNode, // todo in future {a, b, c}; [a, b, c]
  parameters?: GroupNode | Nothing,
  annotation?: OperatorExpressionNode | Nothing,
  assignment?: OperatorExpressionNode | Nothing,
): DeclarationStatementNode {
  return newSyntaxNode<DeclarationStatementNode>({
    $: $DeclarationStatementNode(),
    indent,
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
