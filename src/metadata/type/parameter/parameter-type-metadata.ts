import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class ParameterTypeMetadata extends TypeMetadata {
  constructor(public parameter: () => ParameterMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.parameter().type().attributesScope();
  }

  is(other: TypeMetadata): boolean {
    return this.parameter().type().is(other);
  }
}
