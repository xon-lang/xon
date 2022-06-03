import { Boolean } from '../../lib/core';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { Metadata } from '../metadata';

export abstract class TypeMetadata extends Metadata {
  abstract attributesScope(): DeclarationScope;
  abstract is(metadata: TypeMetadata): Boolean;
}
