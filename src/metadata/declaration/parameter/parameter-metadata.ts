import { none, None, String } from '../../../lib/core';
import { IdTree } from '../../../tree/id/id-tree';
import { Tree } from '../../../tree/tree';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class ParameterMetadata extends DeclarationMetadata {
  name: String | None = none;
  sourceRange: SourceRange;
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | None;
  value: ValueMetadata | None;

  constructor(public tree: IdTree | Tree, public scope: DeclarationScope) {
    super();
    if (tree instanceof IdTree) {
      this.name = tree.text;
    }
    this.sourceRange = tree.sourceRange;
  }
}
