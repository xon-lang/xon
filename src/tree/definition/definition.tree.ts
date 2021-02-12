import {
  DefinitionContext,
  InfixOperatorMemberContext,
  MethodMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';
import { InfixOperatorMemberTree } from './member/infix-operator-member/infix-operator-member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public isAbstract: boolean;

  public abstract: TypeTree;

  public properties: PropertyMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public infixOperators: InfixOperatorMemberTree[] = [];

  public constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx.ID().text;

    this.abstract = ctx.type() ? new TypeTree(ctx.type()) : TypeTree.create('Any');

    ctx.member().forEach((member) => {
      if (member instanceof PropertyMemberContext)
        this.properties.push(new PropertyMemberTree(member));
      if (member instanceof MethodMemberContext) this.methods.push(new MethodMemberTree(member));
      if (member instanceof InfixOperatorMemberContext)
        this.infixOperators.push(new InfixOperatorMemberTree(member));
    });

    this.isAbstract = this.methods.some((x) => x.isAbstract);
  }
}
