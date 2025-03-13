import {
  $AnalyzerType,
  $DeclarationStatementNode,
  DeclarationStatementNode,
  IdNode,
  TypeKeywordNode,
} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationNode = DeclarationStatementNode &
  Brand<'Analyzer.TypeDeclarationNode'> & {
    keyword: TypeKeywordNode;
    id: IdNode;
  };

export const $TypeDeclarationNode = () =>
  $AnalyzerType<TypeDeclarationNode>('TypeDeclarationNode', $DeclarationStatementNode());
