import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { AttributeDeclarationMetadata } from '../attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ClassDefinitionTree, private scope: DeclarationScope) {
    super();
    this.name = tree.id.text;
  }

  baseType(): IdTypeMetadata | null {
    if (!this.tree.baseType) return null;
    return getTypeMetadata(this.tree.baseType, this.scope) as IdTypeMetadata;
  }

  init(typeArguments: TypeMetadata[]): FunctionTypeMetadata {
    const initParameters = this.tree.parameters
      ? this.tree.parameters.map((x) => ({
          name: x.id.text,
          type: getTypeMetadata(x.type, this.scope),
        }))
      : [];
    const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
    return new FunctionTypeMetadata(initParameters, initResultType, this.scope);
  }

  getAttribute(name: string, typeArguments: TypeMetadata[]): AttributeDeclarationMetadata[] {
    const attributesByName = this.tree.attributes.filter((x) => x.id.text === name);
    if (!attributesByName.length) throw new Error(`'${name}' attribute not found`);

    const attributesByTypeArguments = attributesByName.filter(
      (x) => x.typeParameters.length === typeArguments.length,
    );
    if (!attributesByTypeArguments.length)
      throw new Error(`${name}' attribute for '${typeArguments.length}' type parameters not found`);

    return attributesByTypeArguments.map((x) =>
      new AttributeDeclarationMetadata(x, this.scope).useTypeParameters(typeArguments),
    );
  }

  getMethodAttribute(
    name: string,
    typeArguments: TypeMetadata[],
    expressionParameters: TypeMetadata[],
  ): AttributeDeclarationMetadata {
    const attributesByFunctionType = this.getAttribute(name, typeArguments).filter(
      (x) => x.type instanceof FunctionTypeMetadata,
    );
    if (!attributesByFunctionType.length) throw new Error(`'${name}' attribute method not found`);

    const attributesByExpressionParameters = attributesByFunctionType
      .map((x) => ({
        type: x.type as FunctionTypeMetadata,
        attribute: x,
      }))
      .filter(
        (x) =>
          x.type.parameters.length === expressionParameters.length &&
          x.type.parameters.every((x, i) => x.type.is(expressionParameters[i])),
      );

    if (attributesByExpressionParameters.length > 1)
      throw new Error(`Too many attribute with name '${name}'`);

    return attributesByExpressionParameters[0].attribute;
  }
}
