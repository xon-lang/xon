import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { IdToken } from '../../../../tree/id-token';
import { TypeMetadata } from '../../type/type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  id: IdToken;
  type: TypeMetadata

  constructor(tree: AttributeTree) {
    super();
  }
}
