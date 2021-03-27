import {
  DefinitionContext,
  InitMemberContext,
  MethodMemberContext,
  OperatorMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { addIssue } from '../../issue/issue-service';
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
    this.name = ctx.id().text;

    this.abstract = ctx.type() ? new TypeTree(ctx.type()) : TypeTree.create('Any');

    ctx.member().forEach((member) => {
      if (member instanceof PropertyMemberContext)
        this.properties.push(new PropertyMemberTree(member));

      if (member instanceof MethodMemberContext) this.methods.push(new MethodMemberTree(member));

      if (member instanceof InitMemberContext) this.inits.push(new InitMemberTree(member));

      if (member instanceof OperatorMemberContext)
        this.operators.push(new OperatorMemberTree(member));
    });
    this.isAbstract = this.methods.some((x) => x.isAbstract);

    this.validate();
  }

  private validate() {
    // definition name
    if (this.name[0] === this.name[0].toLowerCase())
      addIssue(this.ctx, `Definition name "${this.name}" must start from uppercase letter`);

    // first param of operator overloading
    this.operators
      .filter((x) => x.parameters[0].type.name !== this.name)
      .forEach((x) =>
        addIssue(
          x.ctx,
          `The first operator overload "${x.name}" parameter "${x.parameters[0].name}" must be "${this.name}"`,
        ),
      );
  }
}
