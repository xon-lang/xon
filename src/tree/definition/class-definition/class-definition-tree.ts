import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { AttributeTree } from '../../attribute/attribute-tree';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { DefinitionTree } from '../definition-tree';
import { AttributeClassMemberTree } from './class-member/attribute-class-member/attribute-class-member-tree';
import { getClassMembersTrees } from './class-member/class-member-tree.helper';

export class ClassDefinitionTree extends DefinitionTree {
  genericParameters: IdToken[] = [];
  parameters: ParameterTree[];
  baseType?: TypeTree;
  attributes: AttributeTree[] = [];

  constructor(public ctx?: ClassDefinitionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericParameters =
      (ctx.genericParameters() && ctx.genericParameters()._names.map((x) => new IdToken(x))) || [];
    this.parameters = getParametersTrees(ctx.functionParameters());
    this.baseType = getTypeTree(ctx.type());
    this.attributes = getClassMembersTrees(ctx.classMember()).map(
      (x) => (x as AttributeClassMemberTree).attribute,
    );
  }
}
