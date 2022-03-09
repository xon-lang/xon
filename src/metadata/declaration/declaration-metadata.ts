import { SourceRange } from '../../util/source-range';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceRange;
  name: string;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): AttributeDeclarationMetadata[];
}
