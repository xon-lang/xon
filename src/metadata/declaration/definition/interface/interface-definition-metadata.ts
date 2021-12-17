import { InterfaceDefinitionTree } from '../../../../tree/definition/interface/interface-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { IdTypeMetadata } from '../../../type/id/id-type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { TypeParameterMetadata } from '../../type-parameter/type-parameter-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class InterfaceDefinitionMetadata extends DefinitionMetadata {
  name: string;

  // _generics: GenericMetadata[];
  // get generics(): GenericMetadata[] {
  //   if (this._generics) return this._generics;
  //   return (this._generics = this.tree.typeParameters.map((x) => {
  //     const restrictionType = getTypeMetadata(x.restrictionType, this.scope);
  //     return new GenericMetadata(x.id.text, x.hasSpread, restrictionType, this.scope);
  //   }));
  // }

  // _ancestors: TypeMetadata[];
  // get ancestors(): TypeMetadata[] {
  //   if (this._ancestors) return this._ancestors;
  //   return (this._ancestors = this.tree.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  // }

  // _attributes: AttributeMetadata[];
  // get attributes(): AttributeMetadata[] {
  //   if (this._attributes) return this._attributes;

  //   this._attributes = this.tree.attributes.map((x) => getAttributeMetadata(x, this.scope));
  //   return (this._attributes = [
  //     ...this._attributes,
  //     ...this.ancestors.flatMap((x) => x.attributes),
  //   ]);
  // }

  constructor(tree: InterfaceDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    // const typeArguments = tree.typeParameters.map(
    //   (x) =>
    //     new TypeParameterMetadata(
    //       x.id.text,
    //       x.hasSpread,
    //       x.restrictionType ? getTypeMetadata(x.restrictionType) : null,
    //     ),
    // );
    // this.type = new IdTypeMetadata(this.name, typeArguments);
  }

  // useTypeArguments(args: DefinitionMetadata[]): DefinitionMetadata {
  //   return this;
  // }

  // type(typeArguments: TypeMetadata[]): LambdaTypeMetadata {
  //   const initParameters = this.tree.expressionParameters
  //     ? this.tree.expressionParameters.map((x) => ({
  //         name: x.id.text,
  //         type: getTypeMetadata(x.type, this.scope),
  //       }))
  //     : [];
  //   const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
  //   return new LambdaTypeMetadata(initParameters, initResultType, this.scope);
  // }
}
