import {
  $AnalyzerType,
  $ValueDeclarationNode,
  AssignValueNode,
  diagnoseVariableValueDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeValueNode,
  ValueDeclarationNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type VariableValueDeclarationNode = ValueDeclarationNode &
  Brand<'Analyzer.VariableValueDeclarationNode'> & {
    isMutable: Boolean2;
    target?: IdNode | Nothing;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $VariableValueDeclarationNode = () =>
  $AnalyzerType<VariableValueDeclarationNode>('VariableValueDeclarationNode', $ValueDeclarationNode());

export function newVariableValueDeclarationNode(
  indent: Integer,
  target?: IdNode | Nothing,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): VariableValueDeclarationNode {
  return newSyntaxNode<VariableValueDeclarationNode>({
    $: $ValueDeclarationNode(),
    indent,
    isMutable: false,
    target,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseVariableValueDeclarationNode,
  });
}
