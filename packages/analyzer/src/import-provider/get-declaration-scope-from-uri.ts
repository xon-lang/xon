import {DeclarationScope, newJsonFileImportProvider, newXonFileImportProvider} from '#analyzer';
import {memoize, newArrayData, Nothing, Uri} from '#common';

const declarationScopeProviders = memoize(() =>
  newArrayData([newXonFileImportProvider(), newJsonFileImportProvider()]),
);

export function getDeclarationScopeFromUri(uri: Uri): DeclarationScope | Nothing {
  const provider = declarationScopeProviders().first((x) => x.canProvide(uri));

  return provider?.provideDeclarationScope(uri);
}
