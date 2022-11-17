import { Boolean2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { DefinitionTypeMetadata } from '~/metadata/expression/type/definition/definition-type-metadata';

export class DefinitionMetadata extends DeclarationMetadata {
  base?: DefinitionMetadata | null;
  attributes: ParameterMetadata[] = [];
  type = new DefinitionTypeMetadata(this);

  private _attributesScope: DeclarationScope | null = null;

  attributesScope(): DeclarationScope {
    if (this._attributesScope) {
      return this._attributesScope;
    }

    this._attributesScope = this.base?.attributesScope().clone() ?? new DeclarationScope();
    this.attributes.forEach((x) => this._attributesScope?.add(x));
    return this._attributesScope;
  }

  allAttributes(): ParameterMetadata[] {
    return [...this.base?.allAttributes() || [], ...this.attributes];
  }

  is(definition: DefinitionMetadata): Boolean2 {
    if (definition.sourceRange && this.sourceRange?.equals(definition.sourceRange)) {
      return true;
    }
    return this.base?.is(definition) || false;
  }
}
