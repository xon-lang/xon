import { TypeMetadata } from '../type-metadata';

export abstract class SetTypeMetadata extends TypeMetadata {
  abstract has(other: TypeMetadata): boolean;
}
