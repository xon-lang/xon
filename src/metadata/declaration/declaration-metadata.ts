import { Boolean, None, String } from '../../lib/core';
import { SourceRange } from '../../util/source-range';
import { TypeMetadata } from '../expression/type/type-metadata';
import { Metadata } from '../metadata';
import { DeclarationScope } from './scope/declaration-scope';

export abstract class DeclarationMetadata extends Metadata {
  abstract scope: DeclarationScope;
  abstract sourceRange: SourceRange;
  abstract name: String | None;
  abstract type: TypeMetadata | None;

  equals(other: DeclarationMetadata): Boolean {
    return this.sourceRange.equals(other.sourceRange);
  }
}
