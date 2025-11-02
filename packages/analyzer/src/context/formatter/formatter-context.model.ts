import {$AnalyzerType, AnalyzerFormatter} from '#analyzer';
import {ArrayData} from '#core';
import {Brand, Model} from '#typing';

export type FormatterContext = Model &
  Brand<'Formatter.FormatterContext'> & {
    formatters: ArrayData<AnalyzerFormatter>;

    add(Formatter: AnalyzerFormatter): void;
  };

export const $FormatterContext = () => $AnalyzerType('FormatterContext');
