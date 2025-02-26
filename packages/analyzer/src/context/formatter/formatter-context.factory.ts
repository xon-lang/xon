import {$FormatterContext, AnalyzerFormatter, FormatterContext} from '#analyzer';
import {newArrayData} from '#common';

export function newFormatterContext(): FormatterContext {
  return {
    $: $FormatterContext(),
    formatters: newArrayData(),

    add(formatter: AnalyzerFormatter): void {
      this.formatters.addLastItem(formatter);
    },
  };
}
