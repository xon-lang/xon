import {$AnalyzerFormatter, AnalyzerFormatter, CharacterNode} from '#analyzer';
import {ArrayData, newArrayData} from '#core';

export function formatCharacterNode(this: CharacterNode): ArrayData<AnalyzerFormatter> {
  return newArrayData($AnalyzerFormatter());
}
