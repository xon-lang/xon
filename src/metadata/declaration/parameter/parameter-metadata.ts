import { None } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { TypeExpressionMetadata } from '../../expression/type/type-expression-metadata';
import { ValueExpressionMetadata } from '../../expression/value/value-expression-metadata';
import { Metadata } from '../../metadata';

export class ParameterMetadata implements Metadata {
  constructor(
    public sourceRange: SourceRange,
    public name: String,
    public type?: () => TypeExpressionMetadata | None,
    public value?: () => ValueExpressionMetadata | None,
  ) {}
}
