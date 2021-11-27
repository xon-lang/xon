import { DeclarationScope } from '../declaration-scope';
import { ClassDeclarationMetadata } from '../declaration/class/class-declaration-metadata';

export abstract class TypeMetadata {
  abstract declaration: ClassDeclarationMetadata;
  abstract scope: DeclarationScope;

  abstract equals(other: TypeMetadata): boolean;

  is(other: TypeMetadata) {}
}
