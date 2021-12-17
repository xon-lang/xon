import { TypeParameterMetadata } from './declaration/type-parameter/type-parameter-metadata';
import { TypeMetadata } from './type/type-metadata';

export function checkGenerics(parameters: TypeParameterMetadata[], args: TypeMetadata[]) {
  const spreadGenericIndex = parameters.findIndex((x) => x.hasSpread);
  if (spreadGenericIndex >= 0) {
    if (parameters.length - 1 > args.length) return false;
    const normalizeParameters = parameters
      .map((x) => (x.hasSpread ? args.slice(parameters.length - 1).map(() => x) : [x]))
      .flat();
    return normalizeParameters.every((x, i) => x.is(args[i]));
  }
  return parameters.length === args.length && parameters.every((x, i) => x.is(args[i]));
}
