import { SourceReference } from '../../util/source-reference';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): AttributeDeclarationMetadata[];
}
