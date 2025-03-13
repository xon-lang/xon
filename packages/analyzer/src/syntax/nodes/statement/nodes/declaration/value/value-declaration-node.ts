import {$AnalyzerType, $DeclarationStatementNode, DeclarationStatementNode} from '#analyzer';
import {Brand} from '#typing';

export type ValueDeclarationNode = DeclarationStatementNode & Brand<'Analyzer.ValueDeclarationNode'> & {};

export const $ValueDeclarationNode = () =>
  $AnalyzerType<ValueDeclarationNode>('ValueDeclarationNode', $DeclarationStatementNode());
