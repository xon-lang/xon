import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';
import { ClassMemberTree } from './class-member/class-member.tree';

export class ClassDefinitionTree extends DefinitionTree {
  public name: string;
  public genericParameters: string[];
  public parameters: ParameterTree[];
  public baseType?: TypeTree;
  public members: ClassMemberTree[] = [];

  public constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.baseType = getTypeTree(ctx.type());
    this.members = getClassMembersTrees(ctx.classMember());
  }
}
