import { Any, Boolean } from '../../../lib/core';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export abstract class ValueExpressionMetadata extends ExpressionMetadata {
  type(): TypeMetadata {
    throw new Error('Not implemented');
  }
  is(metadata: TypeMetadata): Boolean {
    throw new Error('Not implemented');
  }
  eval(): Any {
    throw new Error('Not implemented');
  }
}
