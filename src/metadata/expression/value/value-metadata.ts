import { Any2 } from '~/lib/core';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { Metadata } from '~/metadata/metadata';

export abstract class ValueMetadata extends Metadata {
  type(): TypeMetadata | null {
    throw new Error('Not implemented');
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
