import { Boolean } from '../../lib/core';
import { Metadata } from '../metadata';

export abstract class ExpressionMetadata extends Metadata {
  is(metadata: ExpressionMetadata): Boolean {
    throw new Error('Not implemented');
  }
}
