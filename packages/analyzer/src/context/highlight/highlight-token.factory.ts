import {$HighlightToken, HighlightToken, HighlightTokenType} from '#analyzer';
import {TextRange} from '#common';

export function newHighlightToken(type: HighlightTokenType, range: TextRange): HighlightToken {
  return {
    $: $HighlightToken(),
    type,
    range,
  };
}
