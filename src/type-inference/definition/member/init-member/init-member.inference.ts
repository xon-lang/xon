import { InitMemberTree } from '../../../../tree/definition/member/init-member/init-member.tree';
import { GenericsMap } from '../../../generics-map';
import { popScope, pushScope } from '../../../id-scope';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class InitMemberInference extends MemberInference {
  public body?: StatementInference[];

  public constructor(public tree: InitMemberTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    pushScope();
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
