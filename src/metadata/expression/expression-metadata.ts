import { ParameterDeclarationMetadata } from '../declaration/parameter/parameter-declaration-metadata';

export interface ExpressionMetadata {
  attributes(): ParameterDeclarationMetadata[];
  is(metadata: ExpressionMetadata): boolean;
}
