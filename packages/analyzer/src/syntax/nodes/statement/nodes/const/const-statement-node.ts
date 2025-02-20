import {
  $AnalyzerType,
  $StatementNode,
  AssignValueNode,
  ConstKeywordNode,
  diagnoseConstStatementNode,
  newSyntaxNode,
  Node,
  StatementNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type ConstStatementNode = StatementNode &
  Brand<'Analyzer.ConstStatementNode'> & {
    keywordNode: ConstKeywordNode;
    target?: Node | Nothing;
    type?: TypeValueNode | Nothing;
    assign?: AssignValueNode | Nothing;
  };

export const $ConstStatementNode = () =>
  $AnalyzerType<ConstStatementNode>('ConstStatementNode', $StatementNode());

export function newConstStatementNode(
  indent: Integer,
  keywordNode: ConstKeywordNode,
  target?: Node | Nothing,
  type?: TypeValueNode | Nothing,
  assign?: AssignValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): ConstStatementNode {
  return newSyntaxNode<ConstStatementNode>({
    $: $ConstStatementNode(),
    indent,
    keywordNode,
    target,
    type,
    assign,
    errorNodes,

    diagnose: diagnoseConstStatementNode,
  });
}
