import {
  $AnalyzerType,
  $TypeDeclarationNode,
  AngleGroupNode,
  diagnoseNominalTypeDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  NominalTypeDeclarationSemantic,
  semantifyNominalTypeDeclarationNode,
  TypeDeclarationNode,
  TypeKeywordNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type NominalTypeDeclarationNode = TypeDeclarationNode &
  Brand<'Analyzer.NominalTypeDeclarationNode'> & {
    keyword: TypeKeywordNode;
    type?: TypeValueNode | Nothing;
    parameters?: AngleGroupNode | Nothing;
    semantic?: NominalTypeDeclarationSemantic | Nothing;
  };

export const $NominalTypeDeclarationNode = () =>
  $AnalyzerType<NominalTypeDeclarationNode>('NominalTypeDeclarationNode', $TypeDeclarationNode());

export function newNominalTypeDeclarationNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  id: IdNode,
  parameters: AngleGroupNode | Nothing,
  type?: TypeValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): NominalTypeDeclarationNode {
  return newSyntaxNode({
    $: $NominalTypeDeclarationNode(),
    indent,
    keyword,
    id,
    parameters,
    type,
    errorNodes,

    semantify: semantifyNominalTypeDeclarationNode,
    diagnose: diagnoseNominalTypeDeclarationNode,
  });
}
