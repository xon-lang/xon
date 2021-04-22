import { InitMemberTree } from '../../../../tree/definition/member/init-member/init-member.tree';
import { GenericsMap } from '../../../generics-map';
import { popScope, pushScope } from '../../../id-scope';
import { fillStatementTypes } from '../../../statement/statement-type.helper';
import { MemberType } from '../member.type';

export class InitMemberType extends MemberType {
  public constructor(public tree: InitMemberTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    pushScope();
    this.tree.body.forEach((x) => fillStatementTypes(x, this.genericsMap));
    popScope();
  }
}
