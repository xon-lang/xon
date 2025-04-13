import {$AnalyzerType, $ImportProvider, ImportProvider} from '#analyzer';
import {Brand} from '#typing';

export type FileImportProvider = ImportProvider & Brand<'Analyzer.FileImportProvider'>;

export const $FileImportProvider = () =>
  $AnalyzerType<FileImportProvider>('FileImportProvider', $ImportProvider());
