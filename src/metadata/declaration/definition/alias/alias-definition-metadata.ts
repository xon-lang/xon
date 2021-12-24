import { AliasDefinitionNode } from '../../../../ast/definition/alias/alias-definition-node';
import { DeclarationScope } from '../../../declaration-scope';
import { DefinitionMetadata } from '../definition-metadata';

export class AliasDefinitionMetadata extends DefinitionMetadata {
  name: string;
  // attributes: AttributeMetadata[] = [];

  // _generics: GenericMetadata[];
  // get generics(): GenericMetadata[] {
  //   if (this._generics) return this._generics;
  //   return (this._generics = this.node.typeParameters.map((x) => {
  //     const restrictionType = getTypeMetadata(x.restrictionType, this.scope);
  //     return new GenericMetadata(x.id.text, x.hasSpread, restrictionType, this.scope);
  //   }));
  // }

  constructor(node: AliasDefinitionNode, protected scope: DeclarationScope) {
    super();

    this.name = node.id.text;
  }

  // useTypeArguments(args: DefinitionMetadata[]): DefinitionMetadata {
  //   return this;
  // }

  // type(typeArguments: TypeMetadata[]): TypeMetadata {
  //   if (!checkGenerics(this.generics, typeArguments)) throw new Error('Wrong generics');

  //   // todo <...T>: Some<T> | Another<...V>
  //   const aliasScope = new DeclarationScope(this.scope)
  //   this.generics.forEach((x, i)=>aliasScope.add())
  // }
}
