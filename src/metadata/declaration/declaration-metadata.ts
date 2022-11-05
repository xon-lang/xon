import { Boolean2, String2 } from '../../lib/core';
import { DeclarationTree } from '../../tree/declaration/declaration-tree';
import { SourceRange } from '../../util/source-range';
import { TypeMetadata } from '../expression/type/type-metadata';
import { Metadata } from '../metadata';
import { GenericMetadata } from './generic/generic-metadata';
import { ParameterMetadata } from './parameter/parameter-metadata';

export abstract class DeclarationMetadata extends Metadata {
  sourceRange?: SourceRange;
  modifier?: String2 | null;
  name?: String2 | null;

  generics: GenericMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  type?: TypeMetadata | null = null;

  constructor(public tree: DeclarationTree | null) {
    super();

    if (tree) {
      this.sourceRange = tree.sourceRange;
      this.modifier = tree.modifier?.text;
      this.name = tree.name?.text;
    }
  }

  equals(other: DeclarationMetadata): Boolean2 {
    return this.sourceRange.equals(other.sourceRange);
  }
}
