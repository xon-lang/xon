import {$AnalyzerType, $StatementNode, StatementNode} from '#analyzer';
import {Brand} from '#typing';

export type DeclarationStatementNode = StatementNode & Brand<'Analyzer.DeclarationStatementNode'> & {};

export const $DeclarationStatementNode = () =>
  $AnalyzerType<DeclarationStatementNode>('DeclarationStatementNode', $StatementNode());
