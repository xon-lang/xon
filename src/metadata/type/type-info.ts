import { SourceReference } from '../../tree/source-reference';

export abstract class TypeInfo {
  // abstract sourceReference: SourceReference;
  // abstract name: string;
  genericArguments: TypeInfo[];

  useGenerics(genericArguments: TypeInfo[]) {
    this.genericArguments = genericArguments;
  }
}
