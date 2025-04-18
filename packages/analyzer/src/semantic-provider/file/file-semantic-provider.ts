import {$AnalyzerType, $SemanticProvider, SemanticProvider} from '#analyzer';
import {Brand} from '#typing';

export type FileSemanticProvider = SemanticProvider & Brand<'Analyzer.FileSemanticProvider'>;

export const $FileSemanticProvider = () =>
  $AnalyzerType<FileSemanticProvider>('FileSemanticProvider', $SemanticProvider());
