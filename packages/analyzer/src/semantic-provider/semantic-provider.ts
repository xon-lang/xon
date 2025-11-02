import {$AnalyzerType, Semantic} from '#analyzer';
import {Brand, Model, Nothing, Uri} from '#core';
import {Text} from 'antlr4';

export type SemanticProvider = Model &
  Brand<'Analyzer.SemanticProvider'> & {
    provideSemantic(contextUri: Uri, importUri: Uri, text?: Text | Nothing): Semantic | Nothing;
  };

export const $SemanticProvider = () => $AnalyzerType<SemanticProvider>('SemanticProvider');
