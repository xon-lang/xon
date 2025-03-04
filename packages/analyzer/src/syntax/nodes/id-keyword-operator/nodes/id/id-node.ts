import {$AnalyzerType, $LexicalNode, DeclarationSemantic, IdTypeSemantic, LexicalNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type IdNode = LexicalNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: IdTypeSemantic | DeclarationSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $LexicalNode());
