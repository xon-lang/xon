import { SetTypeMetadata } from '../set/set-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  // declaration: DefinitionMetadata;
  // ancestors: TypeMetadata[];

  // _attributes: AttributeMetadata[];
  // get attributes(): AttributeMetadata[] {
  //   if (this._attributes) return this._attributes;
  //   if (!(this.declaration instanceof AliasDefinitionMetadata))
  //     return (this._attributes = this.declaration.attributes);

  //   throw new Error('Not implemented for alias type');
  // }

  constructor(
    public name: string,
    // lib: string,
    public typeArguments: TypeMetadata[], // scope: DeclarationScope,
  ) {
    super();
    // this.declaration = scope.find((x) => {
    //   if (!(x instanceof DefinitionMetadata)) return false;
    //   if (x.name !== name) return false;
    //   if (
    //     x instanceof AliasDefinitionMetadata ||
    //     x instanceof ClassDefinitionMetadata ||
    //     x instanceof InterfaceDefinitionMetadata
    //   ) {
    //     return checkGenerics(x.generics, typeArguments);
    //   }
    //   return x instanceof ObjectDefinitionMetadata && !typeArguments.length;
    // }) as DefinitionMetadata;
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof SetTypeMetadata) return other.has(this);
    if (other instanceof IdTypeMetadata) {
      if (this.typeArguments.length !== other.typeArguments.length) return false;
      if (
        // this.declaration === other.declaration &&
        this.typeArguments.every((x, i) => x.is(other.typeArguments[i]))
      )
        return true;

      // if (this.declaration.ancestors.length) {
      //   return this.declaration.ancestors.some((x) => x.is(other));
      // }
    }
    return false;
  }

  toString() {
    return `${this.name}${this.typeArguments.join(', ')}`;
  }
}
