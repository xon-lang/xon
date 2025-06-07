import {
  $SemanticProviderResolver,
  newJsonSemanticProvider,
  newXonSemanticProvider,
  SemanticProvider,
  SemanticProviderResolver,
} from '#analyzer';
import {newText, Nothing, Uri} from '#common';

export function newSemanticProviderResolver(): SemanticProviderResolver {
  return {
    $: $SemanticProviderResolver(),

    resolve(uri: Uri): SemanticProvider | Nothing {
      if (uri.value.startsWith(newText('json')) || uri.value.endsWith(newText('.json'))) {
        return newJsonSemanticProvider();
      }

      return newXonSemanticProvider();
    },
  };
}
