import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { InterfaceDefinitionTree } from '../../../../tree/definition/interface/interface-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { DefinitionMetadata } from '../definition-metadata';

export class InterfaceDefinitionMetadata extends DefinitionMetadata {
  attributes: AttributeTree[] = [];
  name: string;

  // _ancestor: IdTypeMetadata;
  // get ancestor(): IdTypeMetadata {
  //   if (this._ancestor !== undefined) return this._ancestor;
  //   if (!this.tree.ancestor) return (this._ancestor = null);
  //   return (this._ancestor = getTypeMetadata(
  //     this.tree.ancestor.type,
  //     this.scope,
  //   ) as IdTypeMetadata);
  // }

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
