import { Boolean2 } from '~/lib';
import { DeclarationMetadata, DeclarationScope, DefinitionTypeMetadata, ParameterMetadata } from '~/metadata';

export class DefinitionMetadata extends DeclarationMetadata {
  base?: DefinitionMetadata | null;
  attributes: ParameterMetadata[] = [];
  type = new DefinitionTypeMetadata(this);

  private _attributesScope: DeclarationScope;

  attributesScope(): DeclarationScope {
    if (this._attributesScope) {
      return this._attributesScope;
    }

    this._attributesScope = this.base?.attributesScope().clone() || new DeclarationScope();
    this.attributes.forEach((x) => this._attributesScope.add(x));
    return this._attributesScope;
  }

  allAttributes(): ParameterMetadata[] {
    return [...(this.base?.allAttributes() || []), ...this.attributes];
  }

  is(definition: DefinitionMetadata): Boolean2 {
    if (this.sourceRange.equals(definition.sourceRange)) {
      return true;
    }
    return this.base?.is(definition) || false;
  }
}
