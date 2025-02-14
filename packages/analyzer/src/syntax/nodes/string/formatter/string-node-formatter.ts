import {FormatterItem, StringNode} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

export function formatStringNode(this: StringNode): ArrayData<FormatterItem> {
  return newArrayData();
}
