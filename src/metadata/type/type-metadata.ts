import { DeclarationScope } from '../declaration-scope';
import { DefinitionDeclarationMetadata } from '../declaration/definition/definition-declaration-metadata copy';

export abstract class TypeMetadata {
  abstract declaration: DefinitionDeclarationMetadata;
  abstract scope: DeclarationScope;
  abstract is(other: TypeMetadata): boolean;
}
