import {
  $AnalyzerType,
  $StatementNode,
  AngleGroupNode,
  diagnoseDeclarationNode,
  highlightDeclarationNode,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  Node,
  OperatorExpressionNode,
  semantifyDeclarationNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type DeclarationNode = StatementNode &
  Brand<'Analyzer.DeclarationNode'> & {
    keyword?: KeywordNode | Nothing;
    id: IdNode;
    isMutable: Boolean2;
    parameters?: AngleGroupNode | Nothing;
    type?: OperatorExpressionNode | Nothing;
    value?: OperatorExpressionNode | Nothing;
  };

export const $DeclarationNode = () => $AnalyzerType<DeclarationNode>('DeclarationNode', $StatementNode());

export function newDeclarationNode(
  indent: Integer,
  keyword: KeywordNode | Nothing,
  id: IdNode, // todo in future {a, b, c}; [a, b, c]
  parameters?: AngleGroupNode | Nothing,
  type?: OperatorExpressionNode | Nothing,
  assign?: OperatorExpressionNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): DeclarationNode {
  return newSyntaxNode<DeclarationNode>({
    $: $DeclarationNode(),
    indent,
    isMutable: false,
    keyword,
    id,
    parameters,
    type,
    value: assign,
    errorNodes,

    semantify: semantifyDeclarationNode,
    diagnose: diagnoseDeclarationNode,
    highlight: highlightDeclarationNode,
  });
}
