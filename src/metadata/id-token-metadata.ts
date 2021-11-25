import { SourceReference } from '../tree/source-reference';
import { TypeMetadata } from './type/type-metadata';

export class IdTokenMetadata {
  type: TypeMetadata;
  declarationSourceReference: SourceReference;
  isMutable: boolean;
}
