import { Boolean, None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { DefinitionTypeMetadata } from '../../type/definition/definition-type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class DefinitionMetadata extends DeclarationMetadata {
  private scope: DeclarationScope;

  constructor(
    public sourceRange: SourceRange,
    public modifier: String,
    public name: String,
    public parameters: () => ParameterMetadata[],
    public baseDefinition: () => DefinitionMetadata | None,
    public attributes: () => ParameterMetadata[],
  ) {
    super();
  }

  type() {
    return new DefinitionTypeMetadata(() => this);
  }

  attributesScope(): DeclarationScope {
    if (this.scope) return this.scope;

    const baseDefinition = this.baseDefinition();
    if (baseDefinition) {
      this.scope = baseDefinition.attributesScope().create();
    } else {
      this.scope = new DeclarationScope();
    }
    this.attributes().forEach((x) => this.scope.add(x));
    return this.scope;
  }

  allAttributes(): ParameterMetadata[] {
    const attributes = this.attributes();
    const baseDefinition = this.baseDefinition();

    return [...(baseDefinition?.allAttributes() || []), ...attributes];
  }

  is(definition: DefinitionMetadata): Boolean {
    if (this.sourceRange.equals(definition.sourceRange)) return true;

    const baseDefinition = this.baseDefinition();
    return baseDefinition?.is(definition) || false;
  }
}
