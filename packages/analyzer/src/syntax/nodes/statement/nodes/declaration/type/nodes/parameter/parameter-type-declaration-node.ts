import {
  $AnalyzerType,
  $TypeDeclarationNode,
  AssignValueNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeDeclarationNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ParameterTypeDeclarationNode = TypeDeclarationNode &
  Brand<'Analyzer.ParameterTypeDeclarationNode'> & {
    id: IdNode;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $ParameterTypeDeclarationNode = () =>
  $AnalyzerType<ParameterTypeDeclarationNode>('ParameterTypeDeclarationNode', $TypeDeclarationNode());

export function newParameterTypeDeclarationNode(
  indent: Integer,
  id: IdNode,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ParameterTypeDeclarationNode {
  return newSyntaxNode({
    $: $ParameterTypeDeclarationNode(),
    indent,
    id,
    type,
    assign,
    errorNodes,
  });
}
