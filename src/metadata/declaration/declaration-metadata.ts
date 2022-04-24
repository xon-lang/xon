import { String } from '../../lib/core';
import { SourceRange } from '../../util/source-range';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';

export interface DeclarationMetadata {
  sourceRange: SourceRange;
  name: String;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): ParameterDeclarationMetadata[];
}
