import {newJsonSemanticProvider, newXonSemanticProvider, Semantic} from '#analyzer';
import {memoize, newArrayData, Nothing, Uri} from '#common';
import {Text} from 'antlr4';

const semanticProviders = memoize(() => newArrayData([newXonSemanticProvider(), newJsonSemanticProvider()]));

export function getProviderSemantic(uri: Uri, text?: Text | Nothing): Semantic | Nothing {
  const provider = semanticProviders().first((x) => x.canProvide(uri));

  return provider?.provideSemantic(uri);
}
