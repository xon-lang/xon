import * as glob from 'glob';
import { parseSourceFile } from '../../tree/parse';
import { Scope } from './metadata-handler';

export function createScopeGlobPath(globPath: string): Scope {
  const sourceTrees = glob
    .sync(globPath)
    // .map((x) => path.resolve(__dirname, x))
    .map((x) => parseSourceFile(x));

  const scope = new Scope();
  for (const sourceTree of sourceTrees) {
    for (const definitionTree of sourceTree.definitions) {
      scope.addDefinition(definitionTree);
    }
  }

  return scope;
}
