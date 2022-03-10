import { SourceRange } from '../../util/source-range';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';

export interface DeclarationMetadata {
  sourceRange: SourceRange;
  name: string;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): AttributeDeclarationMetadata[];
}
