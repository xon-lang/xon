import { IdToken } from '../../../tree/id-token';
import { TypeMetadata } from '../type-metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  public name: string;

  constructor(public idToken: IdToken) {
    super();
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
  }
}
