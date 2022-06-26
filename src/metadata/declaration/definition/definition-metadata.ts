import { Boolean, None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { DefinitionTypeMetadata } from '../../expression/type/definition/definition-type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class DefinitionMetadata extends DeclarationMetadata {
  parameters: ParameterMetadata[];
  baseDefinition: DefinitionMetadata | None;
  type = new DefinitionTypeMetadata(this);
  attributes: ParameterMetadata[];

  private scope: DeclarationScope;

  constructor(public sourceRange: SourceRange, public modifier: String, public name: String) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this.scope) {
      return this.scope;
    }

    if (this.baseDefinition) {
      this.scope = this.baseDefinition.attributesScope().create();
    } else {
      this.scope = new DeclarationScope();
    }
    this.attributes.forEach((x) => this.scope.add(x));
    return this.scope;
  }

  allAttributes(): ParameterMetadata[] {
    return [...(this.baseDefinition?.allAttributes() || []), ...this.attributes];
  }

  is(definition: DefinitionMetadata): Boolean {
    if (this.sourceRange.equals(definition.sourceRange)) {
      return true;
    }
    return this.baseDefinition?.is(definition) || false;
  }
}
