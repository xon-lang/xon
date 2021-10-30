import { PropertyClassMemberContext } from '../../../../../grammar/xon-parser';
import { TypeMetadata } from '../../../../../metadata/type/type-metadata';
import { getExpressionTree } from '../../../../expression/expression-tree.helper';
import { ExpressionTree } from '../../../../expression/expression.tree';
import { IdToken } from '../../../../id-token';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { TypeTree } from '../../../../type/type.tree';
import { ClassMemberTree } from '../class-member.tree';

export class PropertyClassMemberTree extends ClassMemberTree {
  id: IdToken;
  isPrivate: boolean;
  type?: TypeTree;
  value?: ExpressionTree;
  typeMetadata: TypeMetadata;

  constructor(public ctx?: PropertyClassMemberContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.isPrivate = this.id.text.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.value = getExpressionTree(ctx.expression()) || null;
  }
}
