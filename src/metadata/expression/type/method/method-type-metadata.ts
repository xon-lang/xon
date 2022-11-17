import { Boolean2 } from '~/lib/core';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';

export class MethodTypeMetadata extends TypeMetadata {
  constructor(public parameters: ParameterMetadata[], public resultType: TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return new DeclarationScope();
  }

  is(other: TypeMetadata): Boolean2 {
    if (other instanceof MethodTypeMetadata) {
      const currentParameters = this.parameters;
      const otherParameters = other.parameters;
      if (currentParameters.length !== otherParameters.length) {
        return false;
      }
      if (currentParameters.some((x, i) => x.type && !otherParameters[i].type?.is(x.type))) {
        return false;
      }
      if (this.resultType.is(other.resultType)) {
        return false;
      }
      return true;
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof MethodTypeMetadata) {
      const otherParameters = other.parameters;
      return (
        this.parameters.every((x, i) => x.type && otherParameters[i].type?.equals(x.type))
        && this.resultType.equals(other.resultType)
      );
    }
    return false;
  }
}
