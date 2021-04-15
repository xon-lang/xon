import { ProgramTree } from '../../tree/program/program.tree';
import { createFunctionType, createPlainType } from '../../tree/type/type-helper';
import { BaseType } from '../base.type';
import { fillDefinitionTypes } from '../definition/definition-type.helper';
import { GenericsMap } from '../generics-map';
import { addToScope } from '../id-scope';
import { fillStatementTypes } from '../statement/statement-type.helper';

export class ProgramType extends BaseType {
  public constructor(public tree: ProgramTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.definitions.forEach((x) => {
      const generics = x.generics.map((z) => createPlainType(z));
      const returnType = createPlainType(x.name, generics);
      const type = createFunctionType(
        x.parameters.map((z) => z.type),
        returnType,
      ).useGenericsMap(this.genericsMap);
      addToScope(x.name, type);
    });
    this.tree.definitions.forEach((x) => fillDefinitionTypes(x, this.genericsMap));
    this.tree.statements.forEach((x) => fillStatementTypes(x, this.genericsMap));
  }
}
