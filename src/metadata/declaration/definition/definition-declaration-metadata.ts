import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { AttributeDeclarationMetadata } from '../attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export abstract class DefinitionDeclarationMetadata extends DeclarationMetadata {
  protected abstract tree: DefinitionTree;
  protected abstract scope: DeclarationScope;
  abstract attributes: AttributeTree[];
  abstract ancestor(): IdTypeMetadata;

  getAttributes(name: string, typeArguments: TypeMetadata[]): AttributeDeclarationMetadata[] {
    const attributesByName = this.attributes.filter((x) => x.id.text === name);
    if (!attributesByName.length)
      throw new Error(`'${name}' attribute not found in '${this.name}' declaration`);

    const attributesByTypeArguments = attributesByName.filter(
      (x) => x.typeParameters.length === typeArguments.length,
    );
    if (!attributesByTypeArguments.length)
      throw new Error(`${name}' attribute for '${typeArguments.length}' type parameters not found`);

    return attributesByTypeArguments.map((x) => new AttributeDeclarationMetadata(x, this.scope));
  }

  getMethodAttribute(
    methodName: string,
    typeArguments: TypeMetadata[],
    expressionParameters: TypeMetadata[],
  ): AttributeDeclarationMetadata {
    const attributes = this.getAttributes(methodName, typeArguments);
    const attributesByFunctionType = attributes.filter(
      (x) => x.type(typeArguments) instanceof FunctionTypeMetadata,
    );
    if (!attributesByFunctionType.length)
      throw new Error(`'${methodName}' attribute method not found in '${this.name}'`);

    const attributesByExpressionParameters = attributesByFunctionType
      .map((x) => ({
        type: x.type(typeArguments) as FunctionTypeMetadata,
        attribute: x,
      }))
      .filter(
        (x) =>
          x.type.parameters.length === expressionParameters.length &&
          x.type.parameters.every((x, i) => x.type.is(expressionParameters[i])),
      );

    if (!attributesByExpressionParameters.length)
      throw new Error(`'${methodName}' attribute method not found`);

    if (attributesByExpressionParameters.length > 1)
      throw new Error(`Too many attribute with name '${methodName}'`);

    return attributesByExpressionParameters[0].attribute;
  }
}
