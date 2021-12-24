import { ClassDefinitionNode } from '../../../../ast/definition/class/class-definition-node';
import { DeclarationScope } from '../../../declaration-scope';
import { DefinitionMetadata } from '../definition-metadata';

export class ClassDefinitionMetadata extends DefinitionMetadata {
  name: string;
  typeArguments: DefinitionMetadata[] = [];

  // _generics: GenericMetadata[];
  // get generics(): GenericMetadata[] {
  //   if (this._generics) return this._generics;
  //   return (this._generics = this.node.typeParameters.map((x) => {
  //     const restrictionType = getTypeMetadata(x.restrictionType, this.scope);
  //     return new GenericMetadata(x.id.text, x.hasSpread, restrictionType, this.scope);
  //   }));
  // }

  // _ancestors: TypeMetadata[];
  // get ancestors(): TypeMetadata[] {
  //   if (this._ancestors) return this._ancestors;
  //   return (this._ancestors = this.node.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  // }

  // _attributes: AttributeMetadata[];
  // get attributes(): AttributeMetadata[] {
  //   if (this._attributes) return this._attributes;

  //   this._attributes = this.node.attributes.map((x) => getAttributeMetadata(x, this.scope));
  //   return (this._attributes = [
  //     ...this._attributes,
  //     ...this.ancestors.flatMap((x) => x.attributes),
  //   ]);
  // }

  constructor(private node: ClassDefinitionNode, protected scope: DeclarationScope) {
    super();

    this.name = node.id.text;
    // const typeParameters = node.typeParameters.map(
    //   (x) =>
    //     new TypeParameterMetadata(
    //       x.id.text,
    //       x.hasSpread,
    //       x.restrictionType ? getTypeMetadata(x.restrictionType) : null,
    //     ),
    // );
    // const parameters = node.parameters.map(x=>new ParameterMetadata(x.id.text, getTypeMetadata(x.type)))
    // const resultType = new IdTypeMetadata(this.name, typeArguments)
    // this.type = new LambdaTypeMetadata(typeParameters, parameters, );
  }

  // useTypeArguments(typeArguments: DefinitionMetadata[]): DefinitionMetadata {
  //   if (this.node.typeParameters.length !== typeArguments.length)
  //     throw new Error('Wrong type arguments count');

  //   const newScope = new DeclarationScope(this.scope);
  //   this.node.typeParameters.forEach((x, i) =>
  //     newScope.add(new TypeParameterMetadata(x, this.scope).useTypeArgument(typeArguments[i])),
  //   );
  //   const metadata = new ClassDefinitionMetadata(this.node, newScope);
  //   return metadata;
  // }

  // type(typeArguments: TypeMetadata[]): LambdaTypeMetadata {
  //   const initParameters = this.node.parameters.map((x) => ({
  //         name: x.id.text,
  //         type: getTypeMetadata(x.type, this.scope),
  //       }))
  //   const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
  //   return new LambdaTypeMetadata(initParameters, initResultType, this.scope);
  // }
}
