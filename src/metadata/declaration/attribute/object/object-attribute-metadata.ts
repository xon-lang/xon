import { ObjectAttributeTree } from '../../../../tree/attribute/object/object-attribute-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { ObjectTypeMetadata } from '../../../type/object/object-type-metadata';
import { ParameterMetadata } from '../../parameter/parameter-metadata';
import { AttributeMetadata } from '../attribute-metadata';
import { getAttributeMetadata } from '../attribute-metadata-helper';

export class ObjectAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private tree: ObjectAttributeTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): ObjectTypeMetadata {
    const parameters = this.tree.body.map((x) => {
      const attribute = getAttributeMetadata(x, this.scope);
      return new ParameterMetadata(attribute.name, attribute.type(), this.scope);
    });

    return new ObjectTypeMetadata(parameters, this.scope);
  }
}
