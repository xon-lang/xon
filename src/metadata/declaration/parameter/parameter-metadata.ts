import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  constructor(public name: string, public type: TypeMetadata) {
    super();
  }

  toString() {
    return `${this.name} ${this.type}`;
  }
}
