import {
  $AnalyzerType,
  $DeclarationNode,
  AngleGroupNode,
  DeclarationNode,
  diagnoseValueDeclarationNode,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  Node,
  OperatorExpressionNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ValueDeclarationNode = DeclarationNode &
  Brand<'Analyzer.ValueDeclarationNode'> & {
    isMutable: Boolean2;
    parameters?: AngleGroupNode | Nothing;
    type?: OperatorExpressionNode | Nothing;
    value?: OperatorExpressionNode | Nothing;
  };

export const $ValueDeclarationNode = () =>
  $AnalyzerType<ValueDeclarationNode>('ValueDeclarationNode', $DeclarationNode());

export function newValueDeclarationNode(
  indent: Integer,
  keyword: KeywordNode | Nothing,
  id: IdNode, // todo in future {a, b, c}; [a, b, c]
  parameters?: AngleGroupNode | Nothing,
  type?: OperatorExpressionNode | Nothing,
  assign?: OperatorExpressionNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ValueDeclarationNode {
  return newSyntaxNode<ValueDeclarationNode>({
    $: $ValueDeclarationNode(),
    indent,
    isMutable: false,
    keyword,
    id,
    parameters,
    type,
    value: assign,
    errorNodes,

    diagnose: diagnoseValueDeclarationNode,
  });
}
