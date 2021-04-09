import { DefinitionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ParameterTree } from '../parameter/parameter.tree';
import { getTypeTree } from '../type/type-helper';
import { TypeTree } from '../type/type.tree';
import { IndexMemberTree } from './member/index-member/index-member.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { getMemberTree } from './member/member-helper';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { OperatorMemberTree } from './member/operator-member/operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public generics: string[];

  public parameters: ParameterTree[];

  public inheritanceType?: TypeTree;

  public properties: PropertyMemberTree[] = [];

  public inits: InitMemberTree[] = [];

  public indexes: IndexMemberTree[] = [];

  public operators: OperatorMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx.id().text;
    this.generics = ctx
      .generics()
      ?.id()
      .map((x) => x.text);
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.inheritanceType = getTypeTree(ctx.type());

    this.ctx
      .member()
      .map((x) => getMemberTree(x))
      .forEach((x) => {
        if (x instanceof PropertyMemberTree) this.properties.push(x);
        if (x instanceof InitMemberTree) this.inits.push(x);
        if (x instanceof IndexMemberTree) this.indexes.push(x);
        if (x instanceof OperatorMemberTree) this.operators.push(x);
        if (x instanceof MethodMemberTree) this.methods.push(x);
      });
  }
}
