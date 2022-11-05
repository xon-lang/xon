import { Boolean2 } from '../../../lib/core';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { Metadata } from '../../metadata';

export abstract class TypeMetadata extends Metadata {
  abstract attributesScope(): DeclarationScope;
  abstract equals(other: TypeMetadata): Boolean2;
  abstract is(other: TypeMetadata): Boolean2;
}
