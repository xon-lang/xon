import { SourceReference } from '../../util/source-reference';
import { ExpressionMetadata } from '../expression/expression-metadata';

export interface DeclarationMetadata {
  sourceReference: SourceReference;
  name: string;
  isCoreDeclaration?: boolean;

  // baseModels(): DeclarationMetadata[];
  generics(): ExpressionMetadata[];
  attributes(): DeclarationMetadata[];
}
