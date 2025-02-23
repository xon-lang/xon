import {
  $AnalyzerType,
  $StatementNode,
  AssignValueNode,
  diagnoseValueDeclarationNode,
  IdNode,
  newSyntaxNode,
  Node,
  StatementNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Boolean2, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ValueDeclarationNode = StatementNode &
  Brand<'Analyzer.ValueDeclarationNode'> & {
    isMutable: Boolean2;
    target?: IdNode | Nothing;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $ValueDeclarationNode = () =>
  $AnalyzerType<ValueDeclarationNode>('ValueDeclarationNode', $StatementNode());

export function newValueDeclarationNode(
  indent: Integer,
  target?: IdNode | Nothing,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ValueDeclarationNode {
  return newSyntaxNode<ValueDeclarationNode>({
    $: $ValueDeclarationNode(),
    indent,
    isMutable: false,
    target,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseValueDeclarationNode,
  });
}
