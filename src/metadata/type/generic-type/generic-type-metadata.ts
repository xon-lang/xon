import { IdToken } from '../../../tree/id-token';
import { TypeMetadata } from '../type-metadata';

export class GenericTypeMetadata extends TypeMetadata {
  name: string;

  constructor(public idToken: IdToken) {
    super();
    this.name = idToken.text;
  }
}
