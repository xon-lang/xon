import {
  $AnalyzerType,
  $DeclarationNode,
  AngleGroupNode,
  DeclarationNode,
  diagnoseTypeDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  NominalTypeDeclarationSemantic,
  OperatorExpressionNode,
  semantifyNominalTypeDeclarationNode,
  TypeKeywordNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type TypeDeclarationNode = DeclarationNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
    keyword: TypeKeywordNode;
    type?: OperatorExpressionNode | Nothing;
    parameters?: AngleGroupNode | Nothing;
    semantic?: NominalTypeDeclarationSemantic | Nothing;
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $DeclarationNode());

export function newTypeDeclarationNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  id: IdNode,
  parameters: AngleGroupNode | Nothing,
  type?: OperatorExpressionNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): TypeDeclarationNode {
  return newSyntaxNode({
    $: $TypeDeclarationNode(),
    indent,
    keyword,
    id,
    parameters,
    type,
    errorNodes,

    semantify: semantifyNominalTypeDeclarationNode,
    diagnose: diagnoseTypeDeclarationNode,
  });
}
