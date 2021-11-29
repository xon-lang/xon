import { AbstractAttributeTree } from '../../../tree/attribute/abstract/abstract-attribute-tree';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { MethodAttributeTree } from '../../../tree/attribute/method/method-attribute-tree';
import { ValueAttributeTree } from '../../../tree/attribute/value/value-attribute-tree';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  name: string;
  typeParameters: TypeMetadata[];

  constructor(private tree: AttributeTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(typeArguments: TypeMetadata[]): TypeMetadata {
    if (this.tree instanceof AbstractAttributeTree)
      return getTypeMetadata(this.tree.type, this.scope);
    if (this.tree instanceof MethodAttributeTree) {
      if (this.tree.type instanceof FunctionTypeTree) {
        const parameters = this.tree.type.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, this.scope),
        }));
        const resultType = getTypeMetadata(this.tree.type.resultType, this.scope);
        return new FunctionTypeMetadata(parameters, resultType, this.scope);
      }
      const resultType = getTypeMetadata(this.tree.type, this.scope);
      return new FunctionTypeMetadata([], resultType, this.scope);
    }
    if (this.tree instanceof ValueAttributeTree) {
      if (this.tree.type) return getTypeMetadata(this.tree.type, this.scope);
      return getExpressionMetadata(this.tree.expression, this.scope).type;
    }

    throw new Error(`Not implemented '${this.tree.constructor.name}'`);
  }
}
