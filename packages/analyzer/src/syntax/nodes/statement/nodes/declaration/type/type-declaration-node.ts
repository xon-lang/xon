import {$AnalyzerType, $DeclarationStatementNode, DeclarationStatementNode, IdNode} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationNode = DeclarationStatementNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
    id: IdNode;
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $DeclarationStatementNode());
