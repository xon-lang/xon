import { OperatorMemberTree } from '../../../../tree/definition/member/operator-member/operator-member.tree';
import { GenericsMap } from '../../../generics-map';
import { addToScope, popScope, pushScope } from '../../../id-scope';
import { fillStatementTypes } from '../../../statement/statement-type.helper';
import { MemberType } from '../member.type';

export class OperatorMemberType extends MemberType {
  public constructor(public tree: OperatorMemberTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    pushScope();

    this.tree.parameters.forEach((x) => {
      // eslint-disable-next-line no-param-reassign
      x.type = x.type.useGenericsMap(this.genericsMap);
      addToScope(x.name, x.type);
    });
    this.tree.returnType = this.tree.returnType.useGenericsMap(this.genericsMap);
    this.tree.body.forEach((x) => fillStatementTypes(x, this.genericsMap));

    popScope();
  }
}
