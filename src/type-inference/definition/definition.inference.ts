import { DefinitionTree } from '../../tree/definition/definition.tree';
import { createFunctionType } from '../../tree/type/type-helper';
import { BaseInference } from '../base.inference';
import { GenericsMap } from '../generics-map';
import { addToScope, popScope, pushScope } from '../id-scope';
import { fillMemberTypes } from './member/member-inference.helper';

export class DefinitionInference extends BaseInference {
  public constructor(public tree: DefinitionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    pushScope();

    this.tree.parameters.forEach((x) => {
      // eslint-disable-next-line no-param-reassign
      x.type = x.type.useGenericsMap(this.genericsMap);
      addToScope(x.name, x.type);
    });

    this.tree.methods.forEach((x) => {
      addToScope(
        x.name,
        createFunctionType(
          x.declaredGenerics,
          x.parameters.map((z) => z.type),
          x.returnType,
        ),
      );
    });

    this.tree.properties.forEach((x) => addToScope(x.name, x.type));

    [
      ...(this.tree.init ? [this.tree.init] : []),
      ...this.tree.methods,
      ...this.tree.operators,
      ...this.tree.properties,
    ].forEach((x) => fillMemberTypes(x, this.genericsMap));

    popScope();
  }
}
