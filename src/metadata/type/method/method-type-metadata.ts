import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class MethodTypeMetadata extends TypeMetadata {
  constructor(public parameters: () => ParameterMetadata[], public result: () => TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return new DeclarationScope();
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof MethodTypeMetadata) {
      const currentParameters = this.parameters();
      const otherParameters = other.parameters();
      if (currentParameters.length !== otherParameters.length) return false;
      if (currentParameters.some((x, i) => !otherParameters[i].type().is(x.type()))) return false;
      if (this.result().is(other.result())) return false;
      return true;
    }
    throw new Error('Not implemented');
  }
}
