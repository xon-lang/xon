import {
  $AnalyzerType,
  $DeclarationNode,
  AngleGroupNode,
  AssignValueNode,
  DeclarationNode,
  diagnoseValueDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ValueDeclarationNode = DeclarationNode &
  Brand<'Analyzer.ValueDeclarationNode'> & {
    isMutable: Boolean2;
    parameters?: AngleGroupNode | Nothing;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $ValueDeclarationNode = () =>
  $AnalyzerType<ValueDeclarationNode>('ValueDeclarationNode', $DeclarationNode());

export function newValueDeclarationNode(
  indent: Integer,
  id: IdNode, // todo in future {a, b, c}; [a, b, c]
  parameters?: AngleGroupNode | Nothing,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ValueDeclarationNode {
  return newSyntaxNode<ValueDeclarationNode>({
    $: $ValueDeclarationNode(),
    indent,
    isMutable: false,
    id,
    parameters,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseValueDeclarationNode,
  });
}
