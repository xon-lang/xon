import {analyzerPackageType, CharacterStream, FormatterItem} from '#analyzer';
import {ArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    source: CharacterStream;
    diagnostics: ArrayData<AnalyzerDiagnostic>;
    formatters: ArrayData<FormatterItem>;

    addDiagnostic(diagnostic: AnalyzerDiagnostic): void;
  };

export const $AnalyzerContext = analyzerPackageType('AnalyzerContext');
