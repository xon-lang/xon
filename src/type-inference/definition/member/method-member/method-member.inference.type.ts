import { MethodMemberTree } from '../../../../tree/definition/member/method-member/method-member.tree';
import { createFunctionType, createLiteralType } from '../../../../tree/type/type-tree.helper';
import { TypeTree } from '../../../../tree/type/type.tree';
import { GenericsMap } from '../../../generics-map';
import { addToScope, popScope, pushScope } from '../../../id-scope';
import { getParameterInference } from '../../../parameter/parameter-inference.helper';
import { ParameterInference } from '../../../parameter/parameter.inference';
import { getStatementInference } from '../../../statement/statement-inference.helper';
import { StatementInference } from '../../../statement/statement.inference';
import { MemberInference } from '../member.inference';

export class MethodMemberInference extends MemberInference {
  public isPrivate: boolean;

  public declaredGenerics: string[];

  public parameters: ParameterInference[] = [];

  public returnType: TypeTree;

  public body?: StatementInference[];

  public constructor(public tree: MethodMemberTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.isPrivate = tree.isPrivate;
    this.declaredGenerics = tree.declaredGenerics;
    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));
    this.returnType = tree.returnType?.useGenericsMap(this.genericsMap) || createLiteralType(null);

    this.type = createFunctionType(
      this.declaredGenerics,
      this.parameters.map((x) => x.type),
      this.returnType,
    );

    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
