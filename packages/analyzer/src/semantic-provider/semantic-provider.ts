import {$AnalyzerType, Semantic, SemanticContext} from '#analyzer';
import {Nothing, Uri} from '#common';
import {Brand, Model} from '#typing';
import {Text} from 'antlr4';

export type SemanticProvider = Model &
  Brand<'Analyzer.SemanticProvider'> & {
    provideSemantic(context: SemanticContext, importUri: Uri, text?: Text | Nothing): Semantic | Nothing;
  };

export const $SemanticProvider = () => $AnalyzerType<SemanticProvider>('SemanticProvider');
