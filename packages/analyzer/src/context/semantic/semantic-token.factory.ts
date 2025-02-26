import {$SemanticToken, SemanticToken, SemanticTokenType} from '#analyzer';
import {TextRange} from '#common';

export function newSemanticToken(range: TextRange, type: SemanticTokenType): SemanticToken {
  return {
    $: $SemanticToken(),
    range,
    type,
  };
}
