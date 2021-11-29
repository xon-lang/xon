import { TypeMetadata } from '../type/type-metadata';

export abstract class DeclarationMetadata {
  abstract name: string;
  abstract type(typeArguments: TypeMetadata[]): TypeMetadata;
}
