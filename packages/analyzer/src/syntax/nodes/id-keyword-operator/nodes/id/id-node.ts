import {$AnalyzerType, $LexicalNode, LexicalNode, UsageTypeSemantic, UsageValueSemantic} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type IdNode = LexicalNode &
  Brand<'Analyzer.IdNode'> & {
    semantic?: UsageTypeSemantic | UsageValueSemantic | Nothing;
  };

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $LexicalNode());
