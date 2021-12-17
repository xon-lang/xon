import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { TypeParameterMetadata } from '../../declaration/type-parameter/type-parameter-metadata';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LambdaTypeMetadata extends IdTypeMetadata {
  constructor(
    public typeParameters: TypeParameterMetadata[],
    public parameters: ParameterMetadata[],
    public resultType: TypeMetadata, // public scope: DeclarationScope,
  ) {
    super('Lambda', [...parameters.map((x) => x.type), resultType]);
  }
}
