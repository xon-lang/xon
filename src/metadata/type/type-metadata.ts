import { SourceReference } from '../../tree/source-reference';

export abstract class TypeMetadata {
  abstract name: string;
  abstract sourceReference: SourceReference;
}
