import { Any, Boolean } from '../../../lib/core';
import { ExpressionMetadata } from '../expression-metadata';
import { TypeExpressionMetadata } from '../type/type-expression-metadata';

export abstract class ValueExpressionMetadata extends ExpressionMetadata {
  type(): TypeExpressionMetadata {
    throw new Error('Not implemented');
  }
  is(metadata: TypeExpressionMetadata): Boolean {
    throw new Error('Not implemented');
  }
  eval(): Any {
    throw new Error('Not implemented');
  }
}
