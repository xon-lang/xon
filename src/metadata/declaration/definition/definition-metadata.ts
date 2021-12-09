import { TypeMetadata } from '../../type/type-metadata';
import { AttributeMetadata } from '../attribute/attribute-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { GenericMetadata } from '../generic/generic-metadata';

export abstract class DefinitionMetadata extends DeclarationMetadata {
  abstract generics: GenericMetadata[];
  abstract ancestors: TypeMetadata[];
  abstract attributes: AttributeMetadata[];
}
