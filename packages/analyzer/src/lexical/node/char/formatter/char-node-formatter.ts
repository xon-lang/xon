import {CharNode, FormatterItem} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

export function formatCharNode(this: CharNode): ArrayData<FormatterItem> {
  return newArrayData();
}
