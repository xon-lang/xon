import { TypeMetadata } from '../type-metadata';

export class FunctionTypeMetadata extends TypeMetadata {
  name?: string;
  parameters: { name?: string; type: TypeMetadata }[] = [];
  resultType?: TypeMetadata;
}
