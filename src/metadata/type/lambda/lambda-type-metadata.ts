import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { SetTypeMetadata } from '../set/set-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LambdaTypeMetadata extends TypeMetadata {
  constructor(
    public name: string,
    public typeArguments: TypeMetadata[],
    public declaration: DefinitionMetadata,
  ) {
    super();
  }

  is(other: TypeMetadata): boolean {
    // if (other instanceof SetTypeMetadata) return other.has(this);
    // if (other instanceof IdTypeMetadata) {
    //   if (this.typeArguments.length !== other.typeArguments.length) return false;
    //   if (this.declaration !== other.declaration && !this.declaration.ancestor) return false;
    //   if (!this.declaration.ancestor.is(other)) return false;

    //   return this.typeArguments.every((x, i) => x.is(other.typeArguments[i]));
    // }
    return false;
  }

  toString() {
    return `${this.name}${this.typeArguments.join(', ')}`;
  }
}
