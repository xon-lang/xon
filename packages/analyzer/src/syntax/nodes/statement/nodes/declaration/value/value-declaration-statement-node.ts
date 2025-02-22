import {
  $AnalyzerType,
  $StatementNode,
  AssignValueNode,
  diagnoseValueDeclarationStatementNode,
  IdNode,
  newSyntaxNode,
  Node,
  StatementNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ValueDeclarationStatementNode = StatementNode &
  Brand<'Analyzer.ValueDeclarationStatementNode'> & {
    target?: IdNode | Nothing;
  } & (
    | {type: TypeValueNode | Nothing; assign?: AssignValueNode | Nothing}
    | {type?: TypeValueNode | Nothing; assign: AssignValueNode | Nothing}
  );

export const $ValueDeclarationStatementNode = () =>
  $AnalyzerType<ValueDeclarationStatementNode>('ValueDeclarationStatementNode', $StatementNode());

export function newValueDeclarationStatementNode(
  indent: Integer,
  target?: IdNode | Nothing,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ValueDeclarationStatementNode {
  return newSyntaxNode<ValueDeclarationStatementNode>({
    $: $ValueDeclarationStatementNode(),
    indent,
    target,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseValueDeclarationStatementNode,
  });
}
