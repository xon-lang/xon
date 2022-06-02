import { Boolean, None } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { Metadata } from '../../metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class DefinitionMetadata implements Metadata {
  private scope: DeclarationScope;

  constructor(
    public sourceRange: SourceRange,
    public name: String,
    public parameters: () => ParameterMetadata[],
    public baseDefinition: () => DefinitionMetadata | None,
    public attributes: () => ParameterMetadata[],
  ) {}

  attributesScope(): DeclarationScope {
    if (this.scope) return this.scope;

    if (this.baseDefinition()) {
      this.scope = this.baseDefinition().scope.create();
    } else {
      this.scope = new DeclarationScope();
    }
    this.attributes().forEach((x) => this.scope.addParameter(x));
    return this.scope;
  }

  allAttributes() {
    const attributes = this.attributes();
    const baseDefinition = this.baseDefinition();

    return [...(baseDefinition?.allAttributes() || []), ...attributes];
  }

  is(definition: DefinitionMetadata): Boolean {
    if (this.sourceRange.equals(definition.sourceRange)) return true;

    const baseDefinition = this.baseDefinition();
    return baseDefinition && baseDefinition.is(definition);
  }
}
