import { ClassMetadata } from '../class-metadata';

export class LiteralMetadata<T extends string | number> extends ClassMetadata {
  value: T;
}
