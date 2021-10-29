import { IdTypeContext } from '../../../grammar/xon-parser';
import { DefinitionTypeMetadata } from '../../../metadata/type/id-type/definition-type-metadata';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IdTypeTree extends TypeTree {
  name: string;
  id: IdToken;
  genericArguments: TypeTree[] = [];
  typeMetadata: DefinitionTypeMetadata;


  constructor(public ctx?: IdTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
  }

  toString(): string {
    const generics = this.genericArguments.join(', ');
    if (this.genericArguments.length) return `${this.name}<${generics}>`;
    return this.name;
  }
}
