import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../../tree/id-token';
import { parseSourceFile } from '../../../tree/parse';
import { TypeParameterTree } from '../../../tree/type-parameter/type-parameter.tree';
import { ClassTypeMetadata } from '../../type/class-type-metadata';
import { TypeMetadata } from '../../type/metadata';
import { HandlerScope } from '../handler-scope';
import { parameterHandle } from './parameter/parameter-handle';

export class Scope {
  private current = new HandlerScope();

  addDeclaration(declaration: {
    id: IdToken;
    typeParameters?: TypeParameterTree[];
    typeMetadata: TypeMetadata;
  }) {
    this.current.addDeclaration(declaration);
  }

  findDeclaration(id: string, typeArgumentsCount: number = 0): TypeMetadata {
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
          definitionTree.typeMetadata = new ClassTypeMetadata(definitionTree);
          this.addDeclaration(definitionTree);
        } else throw new Error('Not implemented');
      }
    }
  }
}
