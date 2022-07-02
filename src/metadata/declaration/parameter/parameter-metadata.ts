import { None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class ParameterMetadata extends DeclarationMetadata {
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | None;
  value: ValueMetadata | None;

  constructor(
    public name: String,
    public sourceRange: SourceRange,
    public scope: DeclarationScope,
  ) {
    super();
  }
}
