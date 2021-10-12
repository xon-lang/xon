import { DefinitionContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { BaseTree } from '../base.tree';
import { getParametersTrees } from '../parameter/parameter-tree.helper';
import { ParameterTree } from '../parameter/parameter.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { getMembersTrees } from './member/member-tree.helper';
import { MemberTree } from './member/member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;
  public genericParameters: string[];
  public parameters: ParameterTree[];
  public inheritanceType?: TypeTree;
  public members: MemberTree[] = [];
  public properties: PropertyMemberTree[] = [];
  public init: InitMemberTree;
  public operators: OperatorMemberTree[] = [];
  public methods: MethodMemberTree[] = [];

  public constructor(public ctx?: DefinitionContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.inheritanceType = getTypeTree(ctx.type());
    this.members = getMembersTrees(ctx.member());
    this.members.forEach((x) => {
      if (x instanceof InitMemberTree) {
        if (this.init) throw Issue.errorFromTree(x, 'Init member already exists');
        this.init = x;
      }
      if (x instanceof MethodMemberTree) this.methods.push(x);
      if (x instanceof OperatorMemberTree) this.operators.push(x);
      if (x instanceof PropertyMemberTree) this.properties.push(x);
    });
  }

  public toString(): string {
    throw new Error(`toString not implemented for "${this.constructor.name}"`);
  }
}
