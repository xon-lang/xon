import {$HighlightToken, HighlightToken, HighlightTokenType} from '#analyzer';
import {TextRange} from '#core';

export function newHighlightToken(type: HighlightTokenType, range: TextRange): HighlightToken {
  return {
    $: $HighlightToken(),
    type,
    range,
  };
}
