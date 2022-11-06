import { Boolean2, String2 } from '~/lib';
import { GenericMetadata, Metadata, ParameterMetadata, TypeMetadata } from '~/metadata';
import { DeclarationTree } from '~/tree';
import { SourceRange } from '~/util';

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
