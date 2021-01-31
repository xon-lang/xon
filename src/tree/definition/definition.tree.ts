import {
  DefinitionContext,

  // InitMemberContext,
  MethodMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  name: string;

  properties: PropertyMemberTree[] = [];

  methods: MethodMemberTree[] = [];

  constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx.ID().text;

    ctx.member().forEach((member) => {
      if (member instanceof PropertyMemberContext)
        this.properties.push(new PropertyMemberTree(member));

      if (member instanceof MethodMemberContext) this.methods.push(new MethodMemberTree(member));
    });
  }
}
