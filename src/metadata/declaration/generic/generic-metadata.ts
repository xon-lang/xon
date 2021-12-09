import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class GenericMetadata extends DeclarationMetadata {
  constructor(
    public name: string,
    public hasSpread: boolean,
    public restrictionType: TypeMetadata,
    private scope: DeclarationScope,
  ) {
    super();
  }

  is(type: TypeMetadata) {
    if (this.restrictionType) {
      return type.is(this.restrictionType);
    }
    return true;
  }

  toString() {
    if (this.restrictionType) {
      return `${this.name} is ${this.restrictionType}`;
    }
    return `${this.name}`;
  }
}
