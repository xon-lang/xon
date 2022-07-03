import { Boolean, None, String } from '../../../lib/core';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { SourceRange } from '../../../util/source-range';
import { DefinitionTypeMetadata } from '../../expression/type/definition/definition-type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class DefinitionMetadata extends DeclarationMetadata {
  modifier: String;
  name: String;
  sourceRange: SourceRange;

  parameters: ParameterMetadata[] = [];
  base: DefinitionMetadata | None;
  attributes: ParameterMetadata[] = [];

  type = new DefinitionTypeMetadata(this);

  private _attributesScope: DeclarationScope;

  constructor(public tree: DefinitionTree, public scope: DeclarationScope) {
    super();

    this.modifier = tree.modifier.text;
    this.name = tree.name.text;
    this.sourceRange = tree.sourceRange;
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
