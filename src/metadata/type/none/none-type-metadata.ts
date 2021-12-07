import { DeclarationScope } from '../../declaration-scope';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { TypeMetadata } from '../type-metadata';

export class NoneTypeMetadata extends TypeMetadata {
  public declaration: DefinitionMetadata;

  constructor(public scope: DeclarationScope) {
    super();

    this.declaration = scope.get('None') as DefinitionMetadata;
  }

  is(other: TypeMetadata): boolean {
    return other instanceof NoneTypeMetadata;
  }
}
