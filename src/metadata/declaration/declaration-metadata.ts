import { SourceReference } from '../../tree/util/source-reference';
import { ExpressionMetadata } from '../expression/expression-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;
  generics(): ExpressionMetadata[];
  attributes(): DeclarationMetadata[];
}
