import {
  $StatementNode2,
  analyzerPackageType,
  diagnoseConditionStatementNode,
  newSyntaxNode,
  StatementNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ConditionStatementNode = StatementNode2 &
  Brand<'Analyzer.ConditionStatementNode'> & {
    ifStatement: StatementNode2;
    elseStatement?: StatementNode2 | Nothing;
  };

export const $ConditionStatementNode = analyzerPackageType<ConditionStatementNode>(
  'ConditionStatementNode',
  $StatementNode2,
);

export function ConditionStatementNode(
  ifStatement: StatementNode2,
  elseStatement?: StatementNode2 | Nothing,
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
