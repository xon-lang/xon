import {newJsonFileImportProvider, newXonFileSemanticProvider, SemanticScope} from '#analyzer';
import {memoize, newArrayData, Nothing, Uri} from '#common';

const semanticScopeProviders = memoize(() =>
  newArrayData([newXonFileSemanticProvider(), newJsonFileImportProvider()]),
);

export function getSemanticScopeFromUri(uri: Uri): SemanticScope | Nothing {
  const provider = semanticScopeProviders().first((x) => x.canProvide(uri));

  return provider?.provideSemantic(uri);
}
