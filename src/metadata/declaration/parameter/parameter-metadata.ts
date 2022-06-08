import { None } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../../value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  constructor(
    public sourceRange: SourceRange,
    public name: String,
    public type: () => TypeMetadata | None,
    public value: () => ValueMetadata | None,
  ) {
    super();
  }
}
