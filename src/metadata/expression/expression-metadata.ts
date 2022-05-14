import { DeclarationMetadata } from '../declaration/declaration-metadata';

export abstract class ExpressionMetadata {
  abstract attributes(): DeclarationMetadata[];
  abstract is(metadata: ExpressionMetadata): boolean;
}
