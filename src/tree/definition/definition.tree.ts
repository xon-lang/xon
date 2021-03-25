import {
  DefinitionContext,
  InitMemberContext,
  MethodMemberContext,
  OperatorMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public isAbstract: boolean;

  public abstract: TypeTree;

  public properties: PropertyMemberTree[] = [];

  public inits: InitMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public operators: OperatorMemberTree[] = [];

  public constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx.ID().text;

    this.abstract = ctx.type() ? new TypeTree(ctx.type()) : TypeTree.create('Any');

    ctx.member().forEach((member) => {
      if (member instanceof PropertyMemberContext)
        this.properties.push(new PropertyMemberTree(member));

      if (member instanceof MethodMemberContext) this.methods.push(new MethodMemberTree(member));

      if (member instanceof InitMemberContext) this.inits.push(new InitMemberTree(member));

      if (member instanceof OperatorMemberContext)
        this.operators.push(new OperatorMemberTree(member, this));
    });

    this.isAbstract = this.methods.some((x) => x.isAbstract);
  }
}
