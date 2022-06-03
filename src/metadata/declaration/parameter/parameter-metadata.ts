import { None } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ValueExpressionMetadata } from '../../expression/value/value-expression-metadata';
import { Metadata } from '../../metadata';
import { TypeMetadata } from '../../type/type-metadata';

export class ParameterMetadata implements Metadata {
  constructor(
    public sourceRange: SourceRange,
    public name: String,
    public type?: () => TypeMetadata | None,
    public value?: () => ValueExpressionMetadata | None,
  ) {}
}
