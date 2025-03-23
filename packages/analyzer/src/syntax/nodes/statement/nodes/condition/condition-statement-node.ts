import {
  $AnalyzerType,
  $StatementNode,
  diagnoseConditionStatementNode,
  ElseStatementNode,
  FormatterContext,
  HighlightContext,
  IfStatementNode,
  newSyntaxNode,
  SemanticContext,
  StatementNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ConditionStatementNode = StatementNode &
  Brand<'Analyzer.ConditionStatementNode'> & {
    ifStatement: IfStatementNode;
    elseStatement?: ElseStatementNode | Nothing;
  };

export const $ConditionStatementNode = () =>
  $AnalyzerType<ConditionStatementNode>('ConditionStatementNode', $StatementNode());

export function newConditionStatementNode(
  ifStatement: IfStatementNode,
  elseStatement?: ElseStatementNode | Nothing,
): ConditionStatementNode {
  return newSyntaxNode({
    $: $ConditionStatementNode(),
    indent: ifStatement.indent,
    parent: ifStatement.parent,
    ifStatement,
    elseStatement,

    semantify(context: SemanticContext): void {},
    diagnose: diagnoseConditionStatementNode,
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
