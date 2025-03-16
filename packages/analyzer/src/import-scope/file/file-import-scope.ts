import {$AnalyzerType, $ImportScope, ImportScope} from '#analyzer';
import {Text} from '#common';
import {Brand} from '#typing';

export type FileImportScope = ImportScope &
  Brand<'Diagnostic.FileImportScope'> & {
    location: Text;
  };

export const $FileImportScope = () => $AnalyzerType<FileImportScope>('FileImportScope', $ImportScope());
