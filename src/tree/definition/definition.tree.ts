import { DefinitionContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { BaseTree } from '../base.tree';
import { ParameterTree } from '../parameter/parameter.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { getMemberTree } from './member/member-helper';
import { MemberTree } from './member/member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public declaredGenerics: string[];

  public parameters: ParameterTree[];

  public hasConstructor: boolean;

  public inheritanceType?: TypeTree;

  public members: MemberTree[] = [];

  public properties: PropertyMemberTree[] = [];

  public init: InitMemberTree;

  public operators: OperatorMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public constructor(public ctx?: DefinitionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.DEFINITION_ID().text;
    this.declaredGenerics =
      ctx
        .declaredGenerics()
        ?.DEFINITION_ID()
        .map((x) => x.text) || [];
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.hasConstructor = !!ctx.parameters();
    this.inheritanceType = getTypeTree(ctx.type());
    this.members = this.ctx.member().map((x) => getMemberTree(x));
    this.members.forEach((x) => {
      if (x instanceof InitMemberTree) {
        if (this.init) throw Issue.errorFromTree(x, 'Init member already exists').toError();
        this.init = x;
      }
      if (x instanceof MethodMemberTree) this.methods.push(x);
      if (x instanceof OperatorMemberTree) this.operators.push(x);
      if (x instanceof PropertyMemberTree) this.properties.push(x);
    });
  }

  public toString(): string {
    throw new Error(`ToString not implemented for "${this.constructor.name}"`);
  }
}
