import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LambdaTypeMetadata extends IdTypeMetadata {
  constructor(
    public parameters: TypeMetadata[],
    public resultType: TypeMetadata,
    public scope: DeclarationScope,
  ) {
    super('Lambda', [...parameters, resultType], scope);
  }
}
