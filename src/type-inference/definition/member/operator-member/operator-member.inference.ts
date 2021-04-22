import { OperatorMemberTree } from '../../../../tree/definition/member/operator-member/operator-member.tree';
import { TypeTree } from '../../../../tree/type/type.tree';
import { GenericsMap } from '../../../generics-map';
import { addToScope, popScope, pushScope } from '../../../id-scope';
import { getParameterInference } from '../../../parameter/parameter-inference.helper';
import { ParameterInference } from '../../../parameter/parameter.inference';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class OperatorMemberInference extends MemberInference {
  public parameters: ParameterInference[];

  public returnType: TypeTree;

  public body?: StatementInference[];

  public constructor(public tree: OperatorMemberTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    pushScope();
    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));
    this.returnType = tree.returnType.useGenericsMap(this.genericsMap);
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
