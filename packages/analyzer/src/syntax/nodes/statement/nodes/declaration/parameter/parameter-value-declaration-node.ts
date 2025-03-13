import {
  $AnalyzerType,
  $DeclarationStatementNode,
  AssignValueNode,
  DeclarationStatementNode,
  diagnoseParameterDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ParameterDeclarationNode = DeclarationStatementNode &
  Brand<'Analyzer.ParameterDeclarationNode'> & {
    isMutable: Boolean2;
    target?: IdNode | Nothing;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $ParameterDeclarationNode = () =>
  $AnalyzerType<ParameterDeclarationNode>('ParameterDeclarationNode', $DeclarationStatementNode());

export function newParameterDeclarationNode(
  indent: Integer,
  target?: IdNode | Nothing, // {a, b, c}; [a, b, c]
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ParameterDeclarationNode {
  return newSyntaxNode<ParameterDeclarationNode>({
    $: $ParameterDeclarationNode(),
    indent,
    isMutable: false,
    target,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseParameterDeclarationNode,
  });
}
