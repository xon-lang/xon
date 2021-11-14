import { IdToken } from '../../tree/id-token';
import { TypeMetadata } from '../type/type-metadata';

export class DeclarationMetadata {
  id: IdToken;
  type: TypeMetadata;

  constructor(id: IdToken, type: TypeMetadata) {
    this.id = id;
    this.type = type;
  }
}
