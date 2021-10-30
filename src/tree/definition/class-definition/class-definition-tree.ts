import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';
import { ClassMemberTree } from './class-member/class-member.tree';
import { InitClassMemberTree } from './class-member/init-class-member/init-class-member-tree';
import { MethodClassMemberTree } from './class-member/method-class-member/method-class-member-tree';
import { OperatorClassMemberTree } from './class-member/operator-class-member/operator-class-member-tree';
import { PropertyClassMemberTree } from './class-member/property-class-member/property-class-member-tree';

export class ClassDefinitionTree extends DefinitionTree {
  public genericParameters: IdToken[] = [];
  public parameters: ParameterTree[];
  public baseType?: TypeTree;
  public members: ClassMemberTree[] = [];
  public properties: PropertyClassMemberTree[] = [];
  public inits: InitClassMemberTree[] = [];
  public methods: MethodClassMemberTree[] = [];
  public operators: OperatorClassMemberTree[] = [];

  public constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericParameters =
      (ctx.genericParameters() && ctx.genericParameters()._names.map((x) => new IdToken(x))) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.baseType = getTypeTree(ctx.type());
    this.members = getClassMembersTrees(ctx.classMember());

    for (const member of this.members) {
      if (member instanceof PropertyClassMemberTree) this.properties.push(member);
      if (member instanceof InitClassMemberTree) this.inits.push(member);
      if (member instanceof MethodClassMemberTree) this.methods.push(member);
      if (member instanceof OperatorClassMemberTree) this.operators.push(member);
    }
  }
}
