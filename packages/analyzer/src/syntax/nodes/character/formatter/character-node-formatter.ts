import {CharacterNode, FormatterItem} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

export function formatCharacterNode(this: CharacterNode): ArrayData<FormatterItem> {
  return newArrayData();
}
