import {AnalyzerFormatter, StringNode} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

export function formatStringNode(this: StringNode): ArrayData<AnalyzerFormatter> {
  return newArrayData();
}
