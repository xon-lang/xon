import { SourceReference } from '../../util/source-reference';
import { ParameterDeclarationMetadata } from './parameter/parameter-declaration-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): ParameterDeclarationMetadata[];
}
