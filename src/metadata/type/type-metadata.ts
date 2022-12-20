import { Boolean2 } from '~/lib/core';
import { AttributeDeclarationMetadata } from '~/metadata/declaration/attribute/attribute-metadata';

export abstract class TypeMetadata {
  abstract attributes(): AttributeDeclarationMetadata[];
  abstract equals(other: TypeMetadata): Boolean2;
  abstract is(other: TypeMetadata): Boolean2;
}
