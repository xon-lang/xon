import {
  DefinitionContext,
  InitMemberContext,
  MethodMemberContext,
  OperatorMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { IssueService } from '../../issue-service/issue-service';
import { BaseTree } from '../base.tree';
import { GenericTypeTree } from '../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { getTypeTree, typeAny } from '../type/type-helper';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public isAbstract: boolean;

  public inheritanceType?: PlainTypeTree | GenericTypeTree;

  public properties: PropertyMemberTree[] = [];

  public inits: InitMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public operators: OperatorMemberTree[] = [];

  public constructor(public ctx: DefinitionContext) {
    super();

    this.name = ctx.id().text;
    this.inheritanceType =
      ctx.type() && (getTypeTree(ctx.type()) as PlainTypeTree | GenericTypeTree);
    if (this.name !== 'Any' && !this.inheritanceType) this.inheritanceType = typeAny;

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
      IssueService.instance.addWarning(
        this,
        `Definition name "${this.name}" start from lowercase`,
        `Definition name must be ${this.name[0].toUpperCase() + this.name.slice(1)}`,
      );

    // first param of operator overloading
    this.operators
      .filter((x) => (x.parameters[0].type as PlainTypeTree).name !== this.name)
      .forEach((x) =>
        IssueService.instance.addWarning(
          x,
          `First operator "${x.name}" overload type  is wrong`,
          `First parameter "${x.parameters[0].name}" must be "${this.name}"`,
        ),
      );

    this.methods
      .filter((x) => this.properties.some((z) => z.name === x.name))
      .forEach((x) =>
        IssueService.instance.addWarning(
          x,
          `Method name "${x.name}" is the same as property`,
          'Use another name for method or property',
        ),
      );
  }
}
