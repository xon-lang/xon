import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { SetTypeMetadata } from '../set/set-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class ObjectTypeMetadata extends TypeMetadata {
  constructor(public parameters: ParameterMetadata[]) {
    super();
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof SetTypeMetadata) return other.has(this);
    if (other instanceof ObjectTypeMetadata) {
      if (this.parameters.length !== other.parameters.length) return false;

      return this.parameters.every((x, i) => x.type.is(other.parameters[i].type));
    }
    return false;
  }

  toString() {
    return `{${this.parameters.join(', ')}}`;
  }
}
