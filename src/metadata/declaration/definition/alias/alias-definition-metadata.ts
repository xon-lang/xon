import { AliasDefinitionTree } from '../../../../tree/definition/alias/alias-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class AliasDefinitionMetadata extends DefinitionMetadata {
  ancestors: TypeMetadata[] = [];
  name: string;

  _generics: GenericMetadata[];
  get generics(): GenericMetadata[] {
    if (this._generics) return this._generics;
    return (this._generics = this.tree.typeParameters.map((x) => {
      const restrictionType = getTypeMetadata(x.restrictionType, this.scope);
      return new GenericMetadata(x.id.text, x.hasSpread, restrictionType, this.scope);
    }));
  }

  constructor(protected tree: AliasDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  // type(typeArguments: TypeMetadata[]): LambdaTypeMetadata {
  //   const initParameters = this.tree.parameters.map((x) => ({
  //         name: x.id.text,
  //         type: getTypeMetadata(x.type, this.scope),
  //       }))
  //   const initResultType = new IdTypeMetadata(this.name, typeArguments, this.scope);
  //   return new LambdaTypeMetadata(initParameters, initResultType, this.scope);
  // }
}
