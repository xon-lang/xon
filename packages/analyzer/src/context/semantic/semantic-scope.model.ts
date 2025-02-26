import {$AnalyzerType} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {Brand, Model} from '#typing';

export type SemanticScope = Model &
  Brand<'Analyzer.SemanticScope'> & {
    parent?: SemanticScope | Nothing;
    isTypeScope?: Boolean2 | Nothing;
    // declarations: Dictionary<Text, ArrayData<T>>;
  };

export const $SemanticScope = () => $AnalyzerType<SemanticScope>('SemanticScope');
