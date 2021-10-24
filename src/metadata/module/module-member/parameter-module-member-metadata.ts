import { TypeMetadata } from '../../definition/definition-metadata';

export class ParameterMetadata {
  public constructor(public name: string, public type: TypeMetadata) {}
}
