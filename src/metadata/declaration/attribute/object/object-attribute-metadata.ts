import { ObjectAttributeNode } from '../../../../ast/attribute/object/object-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { ObjectTypeMetadata } from '../../../type/object/object-type-metadata';
import { ParameterMetadata } from '../../parameter/parameter-metadata';
import { AttributeMetadata } from '../attribute-metadata';
import { getAttributeMetadata } from '../attribute-metadata-helper';

export class ObjectAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private node: ObjectAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = node.id.text;
  }

  type(): ObjectTypeMetadata {
    const parameters = this.node.body.map((x) => {
      const attribute = getAttributeMetadata(x, this.scope);
      return new ParameterMetadata(attribute.name, attribute.type());
    });

    return new ObjectTypeMetadata(parameters);
  }
}
