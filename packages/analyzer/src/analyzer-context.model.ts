import {analyzerPackageType, FormatterItem} from '#analyzer';
import {ArrayData, newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    diagnostics: ArrayData<AnalyzerDiagnostic>;
    formatters: ArrayData<FormatterItem>;
  };

export const $AnalyzerContext = analyzerPackageType('AnalyzerContext');

export function newAnalyzerContext(): AnalyzerContext {
  return {
    $: $AnalyzerContext,
    diagnostics: newArrayData(),
    formatters: newArrayData(),
  };
}
