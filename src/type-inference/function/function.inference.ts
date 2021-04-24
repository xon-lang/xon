import { FunctionTree } from '../../tree/function/function.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseInference } from '../base.inference';
import { GenericsMap } from '../generics-map';
import { addToScope, popScope, pushScope } from '../id-scope';
import { getParameterInference } from '../parameter/parameter-inference.helper';
import { ParameterInference } from '../parameter/parameter.inference';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class FunctionInference extends BaseInference {
  public name: string;

  public isPrivate: boolean;

  public declaredGenerics: string[];

  public parameters: ParameterInference[] = [];

  public returnType: TypeTree;

  public body?: StatementInference[];

  public constructor(public tree: FunctionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.isPrivate = tree.isPrivate;
    this.declaredGenerics = tree.declaredGenerics;
    pushScope();
    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));
    this.returnType = tree.returnType.useGenericsMap(this.genericsMap);
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
