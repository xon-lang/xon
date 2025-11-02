import {$AnalyzerFormatter, AnalyzerFormatter, StringNode} from '#analyzer';
import {ArrayData, newArrayData} from '#core';

export function formatStringNode(this: StringNode): ArrayData<AnalyzerFormatter> {
  return newArrayData($AnalyzerFormatter());
}
