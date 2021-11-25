import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../../tree/id-token';
import { parseSourceFile } from '../../../tree/parse';
import { TypeParameterTree } from '../../../tree/type-parameter/type-parameter.tree';
import { ClassTypeInfo } from '../../type/class-type-info';
import { TypeInfo } from '../../type/type-info';
import { HandlerScope } from '../handler-scope';

export class DeclarationScope {
  private current = new HandlerScope();

  set(declaration: { id: IdToken; typeParameters?: TypeParameterTree[]; typeMetadata: TypeInfo }) {
    this.current.addDeclaration(declaration);
  }

  get(id: string, typeArgumentsCount: number = 0): TypeInfo {
    return this.current.findDeclaration(id, typeArgumentsCount);
  }

  pushScope() {
    this.current = new HandlerScope(this.current);
  }

  popScope() {
    this.current = this.current.parent;
  }

  loadModule(moduleDir: string) {
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
    const definitionsMap = sourceTrees
      .flatMap((x) => x.definitions)
      .filter((x) => x instanceof ClassDefinitionTree)
      .map((x) => x as ClassDefinitionTree)
      .reduce(
        (map, x) => (map.set(`${x.id}<${x.typeParameters.length}>`, x), map),
        new Map<string, ClassDefinitionTree>(),
      );

    for (const definition of definitionsMap.values()) {
    }

    for (const sourceTree of sourceTrees) {
      console.log(sourceTree.ctx.text.substr(0, 10), sourceTree.definitions.length);
      for (const definitionTree of sourceTree.definitions) {
        if (definitionTree instanceof ClassDefinitionTree) {
          definitionTree.parameters.forEach((x) => parameterHandle(x, this));
          definitionTree.typeMetadata = new ClassTypeInfo();
          this.set(definitionTree);
        } else throw new Error('Not implemented');
      }
    }
  }
}
