import {
  $AnalyzerType,
  $SyntaxNode,
  ElseStatementNode,
  FormatterContext,
  HighlightContext,
  IfStatementNode,
  newSyntaxNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type ConditionStatementNode = SyntaxNode &
  Brand<'Analyzer.ConditionStatementNode'> & {
    ifStatement: IfStatementNode;
    elseStatement?: ElseStatementNode | Nothing;
  };

export const $ConditionStatementNode = () =>
  $AnalyzerType<ConditionStatementNode>('ConditionStatementNode', $SyntaxNode());

export function newConditionStatementNode(
  ifStatement: IfStatementNode,
  elseStatement?: ElseStatementNode | Nothing,
): ConditionStatementNode {
  return newSyntaxNode({
    $: $ConditionStatementNode(),
    parent: ifStatement.parent,
    ifStatement,
    elseStatement,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
