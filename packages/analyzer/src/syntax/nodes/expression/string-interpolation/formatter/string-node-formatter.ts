import {$AnalyzerFormatter, AnalyzerFormatter, StringNode} from '#analyzer';
import {ArrayData, newArrayData} from '#core';

export function formatStringInterpolationNode(this: StringNode): ArrayData<AnalyzerFormatter> {
  return newArrayData($AnalyzerFormatter());
}
