import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { IdToken } from '../../id-token';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { FunctionTypeTree } from '../../type/function-type/function-type.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { AttributeClassMemberTree } from './class-member/attribute-class-member/attribute-class-member-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';

export class ClassDefinitionTree extends DefinitionTree {
  typeParameters: TypeParameterTree[] = [];
  initType: FunctionTypeTree;
  baseType?: TypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());

    this.initType = getTypeTree(ctx._init) as FunctionTypeTree;
    if (!(this.initType instanceof FunctionTypeTree)) throw new Error('Wrong class init type');

    this.baseType = getTypeTree(ctx._base);
    this.attributes = getClassMembersTrees(ctx.classMember()).map(
      (x) => (x as AttributeClassMemberTree).attribute,
    );
  }
}
