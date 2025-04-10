import {DeclarationScope, newFileDeclarationScopeProvider} from '#analyzer';
import {memoize, newArrayData, Nothing, Uri} from '#common';

const declarationScopeProviders = memoize(() => newArrayData([newFileDeclarationScopeProvider()]));

export function getDeclarationScopeFromUri(uri: Uri): DeclarationScope | Nothing {
  const provider = declarationScopeProviders().first((x) => x.canProvide(uri));

  return provider?.provideDeclarationScope(uri);
}
