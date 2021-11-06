import { InitDefinitionMemberTree } from '../../../../tree/definition/definition-member/init-definition-member/init-definition-member-tree';
import { createFunctionType, createLiteralType } from '../../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../../generics-map';
import { popScope, pushScope } from '../../../id-scope';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class InitMemberInference extends MemberInference {
  body?: StatementInference[];

  constructor(public tree: InitDefinitionMemberTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.type = createFunctionType([], [], createLiteralType(null));
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
