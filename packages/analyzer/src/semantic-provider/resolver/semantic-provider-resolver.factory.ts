import {
  $SemanticProviderResolver,
  newJsonSemanticProvider,
  newXonSemanticProvider,
  SemanticProvider,
  SemanticProviderResolver,
} from '#analyzer';
import {newArrayData, newText, Uri} from '#common';
import {$Model} from '#typing';

const providers = newArrayData($Model(), [
  {
    type: newText('json'),
    extension: newText('.json'),
    provider: newJsonSemanticProvider(),
  },
  {
    type: newText('xon'),
    extension: newText('.xon'),
    provider: newXonSemanticProvider(),
  },
]);

export function newSemanticProviderResolver(): SemanticProviderResolver {
  return {
    $: $SemanticProviderResolver(),

    resolve(uri: Uri): SemanticProvider {
      return (
        providers.first((x) => uri.value.startsWith(x.type) || uri.value.endsWith(x.extension))?.provider ??
        newXonSemanticProvider()
      );
    },
  };
}
