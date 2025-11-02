import {$AnalyzerType, AnalyzerFormatter} from '#analyzer';
import {ArrayData, Brand, Model} from '#core';

export type FormatterContext = Model &
  Brand<'Formatter.FormatterContext'> & {
    formatters: ArrayData<AnalyzerFormatter>;

    add(Formatter: AnalyzerFormatter): void;
  };

export const $FormatterContext = () => $AnalyzerType('FormatterContext');
