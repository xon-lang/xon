import {
  $AnalyzerType,
  $StatementNode,
  diagnoseDeclarationStatementNode,
  FormatterContext,
  GroupNode,
  highlightDeclarationStatementNode,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  Node,
  OperatorExpressionNode,
  semantifyDeclarationStatementNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type DeclarationStatementNode = StatementNode &
  Brand<'Analyzer.DeclarationStatementNode'> & {
    keyword?: KeywordNode | Nothing;
    id: IdNode;
    isMutable: Boolean2;
    parameters?: GroupNode | Nothing;
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
  errorNodes?: ArrayData<Node> | Nothing,
): DeclarationStatementNode {
  return newSyntaxNode<DeclarationStatementNode>({
    $: $DeclarationStatementNode(),
    indent,
    isMutable: false,
    keyword,
    id,
    parameters,
    annotation,
    assignment,
    errorNodes,

    semantify: semantifyDeclarationStatementNode,
    diagnose: diagnoseDeclarationStatementNode,
    format(context: FormatterContext): void {},
    highlight: highlightDeclarationStatementNode,
  });
}
