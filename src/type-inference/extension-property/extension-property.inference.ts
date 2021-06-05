import { ExtensionPropertyTree } from '../../tree/extension-property/extension-property.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseInference } from '../base.inference';
import { GenericsMap } from '../generics-map';
import { addToScope, popScope, pushScope } from '../id-scope';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class ExtensionPropertyInference extends BaseInference {
  public name: string;

  public extensionType: TypeTree;

  public returnType: TypeTree;

  public body?: StatementInference[];

  public constructor(public tree: ExtensionPropertyTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.extensionType = tree.extensionType.useGenericsMap(this.genericsMap);
    addToScope('this', this.extensionType);
    this.returnType = tree.returnType.useGenericsMap(this.genericsMap);
    this.type = this.returnType;
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
