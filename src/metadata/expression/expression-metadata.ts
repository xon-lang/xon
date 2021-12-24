import { DeclarationMetadata } from '../declaration/declaration-metadata';

export interface ExpressionMetadata {
  attributes(): DeclarationMetadata[];
}
