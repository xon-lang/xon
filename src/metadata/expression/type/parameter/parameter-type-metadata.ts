import { Boolean2 } from '~/lib';
import { DeclarationScope, ParameterMetadata, TypeMetadata } from '~/metadata';

export class ParameterTypeMetadata extends TypeMetadata {
  constructor(public parameter: ParameterMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.parameter.type.attributesScope();
  }

  is(other: TypeMetadata): Boolean2 {
    return this.parameter.type.is(other);
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof ParameterTypeMetadata) {
      return this.parameter.equals(other.parameter);
    }
    return false;
  }
}
