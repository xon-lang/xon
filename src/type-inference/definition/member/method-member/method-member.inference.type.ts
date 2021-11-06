import { MethodDefinitionMemberTree } from '../../../../tree/definition/definition-member/method-definition-member/method-definition-member-tree';
import { createFunctionType, createLiteralType } from '../../../../tree/type/type-tree.helper';
import { TypeTree } from '../../../../tree/type/type.tree';
import { GenericsMap } from '../../../generics-map';
import { addToScope, popScope, pushScope } from '../../../id-scope';
import { getParameterInference } from '../../../parameter/parameter-inference.helper';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class MethodMemberInference extends MemberInference {
  isPrivate: boolean;

  genericParameters: string[];

  parameters: ParameterInferenc;

  public returnType: TypeTree;

  public body?: StatementInference[];

  constructor(public tree: MethodDefinitionMemberTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.isPrivate = tree.isPrivate;
    this.genericParameters = tree.genericParameters;
    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));
    this.returnType = tree.returnType?.useGenericsMap(this.genericsMap) || createLiteralType(null);

    this.type = createFunctionType(
      this.genericParameters,
      this.parameters.map((x) => x.type),
      this.returnType,
    );

    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
