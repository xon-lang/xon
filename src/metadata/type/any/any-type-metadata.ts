import { DeclarationScope } from '../../declaration-scope';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { TypeMetadata } from '../type-metadata';

export class AnyTypeMetadata extends TypeMetadata {
  public declaration: DefinitionMetadata;

  constructor(public scope: DeclarationScope) {
    super();

    this.declaration = scope.get('Any') as DefinitionMetadata;
  }

  is(other: TypeMetadata): boolean {
    return true;
  }
}
