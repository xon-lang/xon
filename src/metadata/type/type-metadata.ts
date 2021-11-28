import { DeclarationScope } from '../declaration-scope';
import { DeclarationMetadata } from '../declaration/declaration-metadata';

export abstract class TypeMetadata {
  abstract declaration: DeclarationMetadata;
  abstract scope: DeclarationScope;
  abstract is(other: TypeMetadata): boolean;
}
