import { None } from '../../../lib/core';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ParameterMetadata extends DeclarationMetadata {
  generics: ParameterMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | None;
  value: ValueMetadata | None;
}
