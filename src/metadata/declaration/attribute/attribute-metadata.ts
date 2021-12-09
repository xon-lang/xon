import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export abstract class AttributeMetadata extends DeclarationMetadata {
  abstract type(): TypeMetadata;
}
