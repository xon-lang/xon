import { PropertyMemberTree } from '../../../../tree/definition/member/property-member/property-member.tree';
import { TypeTree } from '../../../../tree/type/type.tree';
import { getExpressionInference } from '../../../expression/expression-inference.helper';
import { ExpressionInference } from '../../../expression/expression.inference';
import { GenericsMap } from '../../../generics-map';
import { MemberInference } from '../member.inference';

export class PropertyMemberInference extends MemberInference {
  public isPrivate: boolean;

  public type: TypeTree;

  public value?: ExpressionInference;

  public constructor(public tree: PropertyMemberTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.isPrivate = tree.isPrivate;
    this.type = tree.type.useGenericsMap(this.genericsMap);
    this.value = getExpressionInference(tree.value, genericsMap);
  }
}
