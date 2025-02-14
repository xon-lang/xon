import {
  $StatementNode,
  analyzerPackageType,
  diagnoseConditionStatementNode,
  ElseStatementNode,
  IfStatementNode,
  newSyntaxNode,
  StatementNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ConditionStatementNode = StatementNode &
  Brand<'Analyzer.ConditionStatementNode'> & {
    ifStatement: IfStatementNode;
    elseStatement?: ElseStatementNode | Nothing;
  };

export const $ConditionStatementNode = analyzerPackageType<ConditionStatementNode>(
  'ConditionStatementNode',
  $StatementNode,
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
