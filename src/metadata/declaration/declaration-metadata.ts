import { Boolean2, String2 } from '~/lib/core';
import { GenericMetadata } from '~/metadata/declaration/generic/generic-metadata';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { Metadata } from '~/metadata/metadata';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export abstract class DeclarationMetadata extends Metadata {
  sourceSpan: SourceSpan | null = null;
  modifier: String2 | null = null;
  name: String2 | null = null;

  generics: GenericMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | null = null;

  constructor(public tree: DeclarationTree | null) {
    super();

    if (tree) {
      this.sourceSpan = tree.sourceSpan;
      this.modifier = tree.modifier?.text ?? null;
      this.name = tree.name?.text ?? null;
    }
  }

  equals(other: DeclarationMetadata): Boolean2 {
    return (other.sourceSpan && this.sourceSpan?.equals(other.sourceSpan)) ?? false;
  }
}
