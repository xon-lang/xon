import { AliasDefinitionTree } from '../../../../tree/definition/alias/alias-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../../attribute/attribute-metadata';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class AliasDefinitionMetadata extends DefinitionMetadata {
  name: string;
  ancestors: TypeMetadata[] = [];
  attributes: AttributeMetadata[] = [];

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

  // type(typeArguments: TypeMetadata[]): TypeMetadata {
  //   if (!checkGenerics(this.generics, typeArguments)) throw new Error('Wrong generics');

  //   // todo <...T>: Some<T> | Another<...V>
  //   const aliasScope = new DeclarationScope(this.scope)
  //   this.generics.forEach((x, i)=>aliasScope.add())
  // }
}
