import { AttributeMetadata } from '../declaration/attribute/attribute-metadata';

export abstract class TypeMetadata {
  abstract attributes: AttributeMetadata[];
  abstract is(other: TypeMetadata): boolean;
  abstract toString(): string;
}
