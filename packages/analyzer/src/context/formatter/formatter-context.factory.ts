import {$AnalyzerFormatter, $FormatterContext, AnalyzerFormatter, FormatterContext} from '#analyzer';
import {newArrayData} from '#common';

export function newFormatterContext(): FormatterContext {
  return {
    $: $FormatterContext(),
    formatters: newArrayData($AnalyzerFormatter()),

    add(formatter: AnalyzerFormatter): void {
      this.formatters.addLastItem(formatter);
    },
  };
}
