import { AliasDefinitionTree } from '../../../../tree/definition/alias/alias-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class AliasDefinitionMetadata extends DefinitionMetadata {
  name: string;
  generics: GenericMetadata[];

  constructor(protected tree: AliasDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.generics = tree.typeParameters.map((x) => {
      const restrictionType = getTypeMetadata(x.restrictionType, scope);
      return new GenericMetadata(x.id.text, restrictionType, scope);
    });
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
