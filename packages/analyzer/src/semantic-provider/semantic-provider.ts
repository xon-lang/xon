import {$AnalyzerType, Semantic} from '#analyzer';
import {Boolean2, Nothing, Uri} from '#common';
import {Brand, Model} from '#typing';
import {Text} from 'antlr4';

export type SemanticProvider = Model &
  Brand<'Analyzer.SemanticProvider'> & {
    canProvide(uri: Uri): Boolean2;
    provideSemantic(uri: Uri, text?: Text | Nothing): Semantic | Nothing;
  };

export const $SemanticProvider = () => $AnalyzerType<SemanticProvider>('SemanticProvider');
