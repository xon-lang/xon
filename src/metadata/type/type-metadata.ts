import { SourceReference } from '../../tree/source-reference';

export class TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  genericArguments: TypeMetadata[];
}
