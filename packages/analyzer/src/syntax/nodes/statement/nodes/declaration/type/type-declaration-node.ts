import {$AnalyzerType, $DeclarationNode, DeclarationNode, IdNode, TypeKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationNode = DeclarationNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $DeclarationNode());
