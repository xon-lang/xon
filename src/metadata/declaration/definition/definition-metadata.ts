import { Boolean, None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { DefinitionTypeMetadata } from '../../expression/type/definition/definition-type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class DefinitionMetadata extends DeclarationMetadata {
  parameters: ParameterMetadata[] = [];
  base: DefinitionMetadata | None;
  attributes: ParameterMetadata[] = [];

  type = new DefinitionTypeMetadata(this);

  private _attributesScope: DeclarationScope;

  constructor(
    public modifier: String,
    public name: String,
    public sourceRange: SourceRange,
    public scope: DeclarationScope,
  ) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) {
      return this._attributesScope;
    }

    if (this.base) {
      this._attributesScope = this.base.attributesScope().create();
    } else {
      this._attributesScope = new DeclarationScope();
    }
    this.attributes.forEach((x) => this._attributesScope.add(x));
    return this._attributesScope;
  }

  allAttributes(): ParameterMetadata[] {
    return [...(this.base?.allAttributes() || []), ...this.attributes];
  }

  is(definition: DefinitionMetadata): Boolean {
    if (this.sourceRange.equals(definition.sourceRange)) {
      return true;
    }
    return this.base?.is(definition) || false;
  }
}
