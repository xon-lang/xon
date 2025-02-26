import {$AnalyzerType} from '#analyzer';
import {Brand, Model} from '#typing';

export type Semantic = Model & Brand<'Analyzer.Semantic'>;

export const $Semantic = () => $AnalyzerType<Semantic>('Semantic');
