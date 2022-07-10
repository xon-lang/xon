import { none, None, String } from '../../../lib/core';
import { IdTree } from '../../../tree/id/id-tree';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class GenericMetadata extends DeclarationMetadata {
  generics: ParameterMetadata;
  name: String | None = none;
  sourceRange: SourceRange;
  type: TypeMetadata | None;

  constructor(public tree: IdTree, public scope: DeclarationScope) {
    super();

    this.name = tree.text;
    this.sourceRange = tree.sourceRange;
  }
}
