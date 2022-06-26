import { Any } from '../../lib/core';
import { Metadata } from '../metadata';
import { TypeMetadata } from '../expression/type/type-metadata';

export abstract class ValueMetadata extends Metadata {
  type(): TypeMetadata {
    throw new Error('Not implemented');
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
