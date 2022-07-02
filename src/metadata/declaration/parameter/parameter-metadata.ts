import { None, String } from '../../../lib/core';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  sourceRange: SourceRange;
  name: String;

  parameters: ParameterMetadata[];
  type: TypeMetadata | None;
  value: ValueMetadata | None;

  constructor(public tree: ParameterTree) {
    super();
    this.sourceRange = tree.sourceRange;
    this.name = tree.name.text;
  }
}
