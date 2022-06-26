import { None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  type: TypeMetadata | None;
  value: ValueMetadata | None;

  constructor(public sourceRange: SourceRange, public name: String) {
    super();
  }
}
