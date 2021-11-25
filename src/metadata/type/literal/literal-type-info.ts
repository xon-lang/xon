import { ClassTypeInfo } from '../class-type-info';

export class LiteralTypeInfo<T extends string | number> extends ClassTypeInfo {
  value: T;
}
