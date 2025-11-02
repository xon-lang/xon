import {$AnalyzerType, SemanticScope} from '#analyzer';
import {Boolean2, Nothing} from '#core';
import {Brand, Model} from '#typing';

export type Semantic = Model &
  Brand<'Analyzer.Semantic'> & {
    isType?: Boolean2;
    scope?: SemanticScope | Nothing;

    // equals(other: Semantic): Boolean2;
    // is(other: Semantic): Boolean2;
  };

export const $Semantic = () => $AnalyzerType<Semantic>('Semantic');
