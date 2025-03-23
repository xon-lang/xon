import {AnalyzerFormatter, CharacterNode} from '#analyzer';
import {ArrayData, newArrayData} from '#common';

export function formatCharacterNode(this: CharacterNode): ArrayData<AnalyzerFormatter> {
  return newArrayData();
}
