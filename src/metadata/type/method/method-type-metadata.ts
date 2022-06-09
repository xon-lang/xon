import { Boolean } from '../../../lib/core';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class MethodTypeMetadata extends TypeMetadata {
  constructor(public parameters: () => ParameterMetadata[], public resultType: () => TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return new DeclarationScope();
  }

  is(other: TypeMetadata): Boolean {
    if (other instanceof MethodTypeMetadata) {
      const currentParameters = this.parameters();
      const otherParameters = other.parameters();
      if (currentParameters.length !== otherParameters.length) return false;
      if (currentParameters.some((x, i) => !otherParameters[i].type().is(x.type()))) return false;
      if (this.resultType().is(other.resultType())) return false;
      return true;
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean {
    if (other instanceof MethodTypeMetadata) {
      const otherParameters = other.parameters();
      return (
        this.parameters().every((x, i) => otherParameters[i].type().equals(x.type())) &&
        this.resultType().equals(other.resultType())
      );
    }
    return false;
  }
}
