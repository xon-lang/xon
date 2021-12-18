import { GenericNode } from '../../../ast/generic/generic-node';
import { DeclarationScope } from '../../declaration-scope';
import { getTypeDefinition } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';
import { DefinitionMetadata } from '../definition/definition-metadata';

export class TypeParameterMetadata extends DeclarationMetadata {
  definition: DefinitionMetadata;
  name: string;
  hasSpread: boolean;
  restrictionTypeDefinition: DefinitionMetadata;

  constructor(private tree: GenericNode, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.hasSpread = tree.hasSpread;
    this.restrictionTypeDefinition = getTypeDefinition(tree.restrictionType, scope);
  }

  resolveDefinition(definition: DefinitionMetadata) {
    const metadata = new TypeParameterMetadata(this.tree, this.scope);
    metadata.definition = definition;
    return metadata;
  }

  // is(type: TypeMetadata) {
  //   if (this.restrictionTypeDefinition) {
  //     return type.is(this.restrictionTypeDefinition);
  //   }
  //   return true;
  // }

  toString() {
    if (this.restrictionTypeDefinition) {
      return `${this.name} is ${this.restrictionTypeDefinition}`;
    }
    return `${this.name}`;
  }
}
