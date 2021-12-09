import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class GenericMetadata extends DeclarationMetadata {
  constructor(
    public name: string,
    public restrictionType: TypeMetadata,
    private scope: DeclarationScope,
  ) {
    super();
  }

  toString() {
    if (this.restrictionType) {
      return `${this.name} is ${this.restrictionType}`;
    }
    return `${this.name}`;
  }
}
