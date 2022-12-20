import { Any2 } from '~/lib/core';
import { Metadata } from '~/metadata/metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';

export abstract class ExpressionMetadata extends Metadata {
  type(): TypeMetadata {
    throw new Error('Not implemented');
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
