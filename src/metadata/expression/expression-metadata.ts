import { AttributeDeclarationMetadata } from '../declaration/attribute/attribute-declaration-metadata';

export interface ExpressionMetadata {
  attributes(): AttributeDeclarationMetadata[];
  is(metadata: ExpressionMetadata): boolean;
}
