import { Boolean2 } from '~/lib';
import { DeclarationScope, Metadata } from '~/metadata';

export abstract class TypeMetadata extends Metadata {
  abstract attributesScope(): DeclarationScope;
  abstract equals(other: TypeMetadata): Boolean2;
  abstract is(other: TypeMetadata): Boolean2;
}
