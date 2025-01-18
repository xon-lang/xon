import {analyzerPackageType, FormatterItem} from '#analyzer';
import {ArrayData, CharStream, TextRange} from '#common';
import {AnalyzerDiagnostic, predefinedDiagnostics} from '#diagnostic';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    source: CharStream;
    diagnostics: ArrayData<AnalyzerDiagnostic>;
    formatters: ArrayData<FormatterItem>;

    addDiagnostic(
      range: TextRange,
      select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
    ): void;
  };

export const $AnalyzerContext = analyzerPackageType('AnalyzerContext');
