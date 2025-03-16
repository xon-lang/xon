import {$AnalyzerType, $ImportScope, ImportScope} from '#analyzer';
import {Brand} from '#typing';

export type FileImportScope = ImportScope & Brand<'Diagnostic.FileImportScope'> & {};

export const $FileImportScope = () => $AnalyzerType('FileImportScope', $ImportScope());
