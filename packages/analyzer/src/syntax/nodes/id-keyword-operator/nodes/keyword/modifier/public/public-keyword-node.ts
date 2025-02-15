import {$AnalyzerType, $ModifierKeywordNode, ModifierKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type PublicKeywordNode = ModifierKeywordNode & Brand<'Analyzer.PublicKeywordNode'>;

export const $PublicKeywordNode = () =>
  $AnalyzerType<PublicKeywordNode>('PublicKeywordNode', $ModifierKeywordNode());
