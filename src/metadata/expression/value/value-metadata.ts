import { Any2 } from '~/lib';
import { Metadata, TypeMetadata } from '~/metadata';

export abstract class ValueMetadata extends Metadata {
  type(): TypeMetadata | null {
    throw new Error('Not implemented');
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
