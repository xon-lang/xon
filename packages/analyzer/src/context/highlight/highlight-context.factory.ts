import {$HighlightContext, $HighlightToken, HighlightContext, HighlightTokenType} from '#analyzer';
import {newArrayData, TextRange} from '#core';

export function newHighlightContext(): HighlightContext {
  return {
    $: $HighlightContext(),
    highlights: newArrayData($HighlightToken()),

    add(type: HighlightTokenType, range: TextRange): void {
      this.highlights.addLastItem({$: $HighlightToken(), type, range});
    },
  };
}
