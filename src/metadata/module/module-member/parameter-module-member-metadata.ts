import { TypeMetadata } from '../../type/type-metadata';

export class ParameterMetadata {
  public constructor(public name: string, public type: TypeMetadata) {}
}
