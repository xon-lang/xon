import {$SemanticScope, SemanticScope} from '#analyzer';
import {Boolean2, Nothing} from '#common';

export function newSemanticScope(
  parent?: SemanticScope | Nothing,
  isTypeScope?: Boolean2 | Nothing,
): SemanticScope {
  return {
    $: $SemanticScope(),
    parent,
    isTypeScope,
  };
}
