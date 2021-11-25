import { SourceReference } from '../../tree/source-reference';

export abstract class Metadata {
  abstract sourceReference: SourceReference;
  abstract name: string;
  genericArguments: Metadata[];

  useGenerics(genericArguments: Metadata[]) {
    this.genericArguments = genericArguments;
  }
}
