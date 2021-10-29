import { IdToken } from '../tree/id-token';
import { TypeMetadata } from './type/type-metadata';

export interface DeclarationMetadata {
  id: IdToken;
  definition: TypeMetadata;
}
