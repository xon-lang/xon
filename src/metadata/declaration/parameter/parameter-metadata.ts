import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  constructor(public name: string, private type: TypeMetadata, private scope: DeclarationScope) {
    super();
  }

  toString() {
    return `${this.name} ${this.type}`;
  }
}
