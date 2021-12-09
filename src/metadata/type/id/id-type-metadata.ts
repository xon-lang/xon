import { DeclarationScope } from '../../declaration-scope';
import { AliasDefinitionMetadata } from '../../declaration/definition/alias/alias-definition-metadata';
import { ClassDefinitionMetadata } from '../../declaration/definition/class/class-definition-metadata';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { InterfaceDefinitionMetadata } from '../../declaration/definition/interface/interface-definition-metadata';
import { ObjectDefinitionMetadata } from '../../declaration/definition/object/object-definition-metadata';
import { GenericMetadata } from '../../declaration/generic/generic-metadata';
import { SetTypeMetadata } from '../set/set-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  public declaration: DefinitionMetadata;
  ancestors: TypeMetadata[];

  constructor(public name: string, public typeArguments: TypeMetadata[], scope: DeclarationScope) {
    super();
    this.declaration = scope.find((x) => {
      if (!(x instanceof DefinitionMetadata)) return false;
      if (x.name !== name) return false;
      if (
        x instanceof AliasDefinitionMetadata ||
        x instanceof ClassDefinitionMetadata ||
        x instanceof InterfaceDefinitionMetadata
      ) {
        return this.checkGenerics(x.generics, typeArguments);
      }
      return x instanceof ObjectDefinitionMetadata && !typeArguments.length;
    }) as DefinitionMetadata;
  }

  checkGenerics(parameters: GenericMetadata[], args: TypeMetadata[]) {
    const spreadGenericIndex = parameters.findIndex((x) => x.hasSpread);
    if (spreadGenericIndex >= 0) {
      if (parameters.length - 1 > args.length) return false;
      const normalizeParameters = parameters
        .map((x) => (x.hasSpread ? args.slice(parameters.length - 1).map(() => x) : [x]))
        .flat();
      return normalizeParameters.every((x, i) => x.is(args[i]));
    }
    return parameters.length === args.length && parameters.every((x, i) => x.is(args[i]));
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof SetTypeMetadata) return other.has(this);
    if (other instanceof IdTypeMetadata) {
      if (this.typeArguments.length !== other.typeArguments.length) return false;
      if (
        this.declaration === other.declaration &&
        this.typeArguments.every((x, i) => x.is(other.typeArguments[i]))
      )
        return true;

      if (this.declaration.ancestors.length) {
        return this.declaration.ancestors.some((x) => x.is(other));
      }
    }
    return false;
  }

  toString() {
    return `${this.name}${this.typeArguments.join(', ')}`;
  }
}
