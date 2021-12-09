import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { InterfaceDefinitionTree } from '../../../../tree/definition/interface/interface-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class InterfaceDefinitionMetadata extends DefinitionMetadata {
  name: string;
  attributes: AttributeTree[] = [];

  _generics: GenericMetadata[];
  get generics(): GenericMetadata[] {
    if (this._generics) return this._generics;
    return (this._generics = this.tree.typeParameters.map((x) => {
      const restrictionType = getTypeMetadata(x.restrictionType, this.scope);
      return new GenericMetadata(x.id.text, x.hasSpread, restrictionType, this.scope);
    }));
  }

  _ancestors: TypeMetadata[];
  get ancestors(): TypeMetadata[] {
    if (this._ancestors) return this._ancestors;
    return (this._ancestors = this.tree.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  }

  constructor(protected tree: InterfaceDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.attributes = tree.attributes;
  }

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
