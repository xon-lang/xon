import {$AnalyzerType} from '#analyzer';
import {Boolean2} from '#common';
import {Brand, Model} from '#typing';

export type Semantic = Model &
  Brand<'Analyzer.Semantic'> & {
    isType: Boolean2;
  };

export const $Semantic = () => $AnalyzerType<Semantic>('Semantic');
