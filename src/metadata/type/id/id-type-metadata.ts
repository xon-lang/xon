import { FunctionTypeMetadata } from '../function/function-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  name: string;
  generics: TypeMetadata[];
  init: FunctionTypeMetadata;
}
