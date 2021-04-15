import { DefinitionTree } from '../../tree/definition/definition.tree';
import { createActionType, createFunctionType } from '../../tree/type/type-helper';
import { BaseType } from '../base.type';
import { GenericsMap } from '../generics-map';
import { addToScope, popScope, pushScope } from '../id-scope';
import { fillMemberTypes } from './member/member-type.helper';

export class DefinitionType extends BaseType {
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
      if (x.returnType)
        addToScope(
          x.name,
          createFunctionType(
            x.parameters.map((z) => z.type),
            x.returnType,
          ),
        );
      else addToScope(x.name, createActionType(x.parameters.map((z) => z.type)));
    });

    this.tree.properties.forEach((x) => addToScope(x.name, x.returnType));

    [
      ...this.tree.properties,
      ...this.tree.inits,
      ...this.tree.operators,
      ...this.tree.methods,
    ].forEach((x) => fillMemberTypes(x, this.genericsMap));

    popScope();
  }
}
