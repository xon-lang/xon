import {$AnalyzerType, $StatementNode, IdNode, StatementNode} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationNode = StatementNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
    id: IdNode;
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $StatementNode());
