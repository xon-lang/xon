import {
  $StatementNode2,
  analyzerPackageType,
  diagnoseConditionStatementNode,
  ElseStatementNode,
  IfStatementNode,
  newSyntaxNode,
  StatementNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ConditionStatementNode = StatementNode2 &
  Brand<'Analyzer.ConditionStatementNode'> & {
    ifStatement: IfStatementNode;
    elseStatement?: ElseStatementNode | Nothing;
  };

export const $ConditionStatementNode = analyzerPackageType<ConditionStatementNode>(
  'ConditionStatementNode',
  $StatementNode2,
);

export function newConditionStatementNode(
  ifStatement: IfStatementNode,
  elseStatement?: ElseStatementNode | Nothing,
): ConditionStatementNode {
  return newSyntaxNode({
    $: $ConditionStatementNode,
    indent: ifStatement.indent,
    parent: ifStatement.parent,
    ifStatement,
    elseStatement,

    diagnose: diagnoseConditionStatementNode,
  });
}
