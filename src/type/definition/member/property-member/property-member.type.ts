import { PropertyMemberTree } from '../../../../tree/definition/member/property-member/property-member.tree';
import { fillExpressionTypes } from '../../../expression/expression-type.helper';
import { GenericsMap } from '../../../generics-map';
import { MemberType } from '../member.type';

export class PropertyMemberType extends MemberType {
  public constructor(public tree: PropertyMemberTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.returnType = this.tree.returnType.useGenericsMap(this.genericsMap);
    if (this.tree.value) fillExpressionTypes(this.tree.value, this.genericsMap);
  }
}
