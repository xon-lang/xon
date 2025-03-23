import {$AnalyzerType, $SyntaxNode, DeclarationSemantic, IdTypeSemantic, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type IdNode = SyntaxNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: IdTypeSemantic | DeclarationSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $SyntaxNode());
