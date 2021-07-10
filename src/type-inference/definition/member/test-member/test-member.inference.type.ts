import { TestMemberTree } from '../../../../tree/definition/member/test-member/test-member.tree';
import { createFunctionType, createLiteralType } from '../../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../../generics-map';
import { popScope, pushScope } from '../../../id-scope';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class TestMemberInference extends MemberInference {
  public body: StatementInference[];

  public constructor(public tree: TestMemberTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.type = createFunctionType([], [], createLiteralType(null));
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
