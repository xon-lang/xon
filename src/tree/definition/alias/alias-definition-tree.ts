import { AliasDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getGenericNodes } from '../../generic/generic-node-helper';
import { GenericNode } from '../../generic/generic-node';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';

export class AliasDefinitionTree extends DefinitionTree {
  id: IdToken;
  typeParameters: GenericNode[] = [];
  type: TypeTree;

  constructor(public ctx: AliasDefinitionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    if (this.id.text[0] !== this.id.text[0].toUpperCase())
      throw new Error(`Definition name '${this.id.text}' must start with upper letter`);

    this.typeParameters = getGenericNodes(ctx.typeParameters());
    const spreadParameters = this.typeParameters.filter((x) => x.hasSpread);
    if (spreadParameters.length > 1) {
      throw new Error(`Spread generic parameter must be only but '${spreadParameters.length}'`);
    }
    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    return `${this.id}${typeParameters}: ${this.type}`;
  }
}
