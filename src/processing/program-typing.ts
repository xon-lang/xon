import { ProgramTree } from '../tree/program/program.tree';
import { createPlainType } from '../tree/type/type-helper';
import { processDefinition } from './definition-typing';
import { processLibrary } from './library-typing';
import { processStatement } from './statement-typing';
import { addToScope, popScope, pushScope } from './typing';

export function processProgram(tree: ProgramTree): void {
  pushScope();
  tree.libraries.forEach(processLibrary);
  tree.definitions.forEach((x) => {
    // const type = createFunctionType(x.generics, x.parameters.map(z=>z.dataType), x.generics.length
    // ? createGenericType(x.name, x.generics)
    // : createPlainType(x.name))
    addToScope(x.name, createPlainType(x.name));
  });
  tree.definitions.forEach(processDefinition);
  tree.statements.forEach(processStatement);

  popScope();
}
