import {$HighlightContext, $HighlightToken, HighlightContext, HighlightTokenType} from '#analyzer';
import {newArrayData, TextRange} from '#common';

export function newHighlightContext(): HighlightContext {
  return {
    $: $HighlightContext(),
    tokens: newArrayData(),

    add(type: HighlightTokenType, range: TextRange): void {
      this.tokens.addLastItem({$: $HighlightToken(), type, range});
    },
  };
}
