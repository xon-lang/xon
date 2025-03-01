import {$AnalyzerType, $LexicalNode, LexicalNode, UsageSemantic} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type IdNode = LexicalNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: UsageSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $LexicalNode());
