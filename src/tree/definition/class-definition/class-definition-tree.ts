import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';
import { ClassMemberTree } from './class-member/class-member.tree';

export class ClassDefinitionTree extends DefinitionTree {
  public genericParameters: string[];
  public parameters: ParameterTree[];
  public baseType?: TypeTree;
  public members: ClassMemberTree[] = [];

  public constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.baseType = getTypeTree(ctx.type());
    this.members = getClassMembersTrees(ctx.classMember());
  }
}
