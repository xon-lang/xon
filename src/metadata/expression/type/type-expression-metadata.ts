import { Boolean } from '../../../lib/core';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export abstract class TypeExpressionMetadata extends ExpressionMetadata {
  abstract attributesScope(): DeclarationScope;
  abstract is(metadata: TypeExpressionMetadata): Boolean;
}
