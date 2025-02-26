import {$AnalyzerType} from '#analyzer';
import {TextRange} from '#common';
import {Brand, Model} from '#typing';

export enum SemanticTokenType {}

export type SemanticToken = Model &
  Brand<'Analyzer.SemanticToken'> & {
    range: TextRange;
    type: SemanticTokenType;
  };

export const $SemanticToken = () => $AnalyzerType<SemanticToken>('SemanticToken');
