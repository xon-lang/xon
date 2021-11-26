import { TypeMetadata } from '../type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  constructor(
    public parameters: { name?: string; type: TypeMetadata }[],
    public resultType?: TypeMetadata,
  ) {
    super();
  }
}
