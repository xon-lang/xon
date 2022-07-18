import { Boolean, none, None, String } from '../../lib/core';
import { DeclarationTree } from '../../tree/declaration/declaration-tree';
import { SourceRange } from '../../util/source-range';
import { TypeMetadata } from '../expression/type/type-metadata';
import { ValueMetadata } from '../expression/value/value-metadata';
import { Metadata } from '../metadata';
import { GenericMetadata } from './generic/generic-metadata';
import { ParameterMetadata } from './parameter/parameter-metadata';
import { DeclarationScope } from './scope/declaration-scope';

export abstract class DeclarationMetadata extends Metadata {
  sourceRange: SourceRange;
  modifier: String | None;
  name: String | None;

  generics: GenericMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | None = none;
  value: ValueMetadata | None;

  constructor(public tree: DeclarationTree | None, public scope: DeclarationScope) {
    super();

    if (tree) {
      this.sourceRange = tree.sourceRange;
      this.modifier = tree.modifier?.text;
      this.name = tree.name?.text;
    }
  }

  equals(other: DeclarationMetadata): Boolean {
    return this.sourceRange.equals(other.sourceRange);
  }

  toString() {
    if (this.modifier) {
      return `${this.modifier} ${this.name}${this.generics}${this.parameters}`;
    }
    return `${this.name}${this.generics}${this.parameters}`;
  }
}
