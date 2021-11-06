import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { AttributeClassMemberTree } from './class-member/attribute-class-member/attribute-class-member-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';
import { OperatorClassMemberTree } from './class-member/operator-class-member/operator-class-member-tree';

export class ClassDefinitionTree extends DefinitionTree {
  genericParameters: IdToken[] = [];
  parameters: ParameterTree[];
  baseType?: TypeTree;
  attributes: AttributeClassMemberTree[] = [];
  operators: OperatorClassMemberTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericParameters =
      (ctx.genericParameters() && ctx.genericParameters()._names.map((x) => new IdToken(x))) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.baseType = getTypeTree(ctx.type());

    for (const member of getClassMembersTrees(ctx.classMember())) {
      if (member instanceof AttributeClassMemberTree) this.attributes.push(member);
      if (member instanceof OperatorClassMemberTree) this.operators.push(member);
    }
  }
}
