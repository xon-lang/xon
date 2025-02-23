import {
  $AnalyzerType,
  $TypeDeclarationNode,
  AngleGroupNode,
  AssignValueNode,
  diagnoseStructuralTypeDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeDeclarationNode,
  TypeKeywordNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type StructuralTypeDeclarationNode = TypeDeclarationNode &
  Brand<'Analyzer.StructuralTypeDeclarationNode'> & {
    id: IdNode;
    assign: AssignValueNode;
  };

export const $StructuralTypeDeclarationNode = () =>
  $AnalyzerType<StructuralTypeDeclarationNode>('StructuralTypeDeclarationNode', $TypeDeclarationNode());

export function newStructuralTypeDeclarationNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  id: IdNode,
  parameters: AngleGroupNode | Nothing,
  assign: AssignValueNode,
  errorNodes: ArrayData<Node> | Nothing,
): StructuralTypeDeclarationNode {
  return newSyntaxNode({
    $: $StructuralTypeDeclarationNode(),
    indent,
    keyword,
    id,
    parameters,
    assign,
    errorNodes,

    diagnose: diagnoseStructuralTypeDeclarationNode,
  });
}
