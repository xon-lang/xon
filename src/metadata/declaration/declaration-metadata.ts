import { SourceReference } from '../../ast/util/source-reference';
import { ExpressionMetadata } from '../expression/expression-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;
  generics: ExpressionMetadata[];
}
