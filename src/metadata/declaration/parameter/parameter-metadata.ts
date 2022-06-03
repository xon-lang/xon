import { None } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { Metadata } from '../../metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../../value/value-metadata';

export class ParameterMetadata implements Metadata {
  constructor(
    public sourceRange: SourceRange,
    public name: String,
    public type: () => TypeMetadata | None,
    public value: () => ValueMetadata | None,
  ) {}
}
