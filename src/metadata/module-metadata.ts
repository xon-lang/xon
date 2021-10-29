import { glob } from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../tree/definition/class-definition/class-definition-tree';
import { parseSourceFile } from '../tree/parse';
import { SourceTree } from '../tree/source/source-tree';
import { ClassTypeMetadata } from './type/id-type/class-type/class-type-metadata';
import { TypeMetadata } from './type/type-metadata';
import { SourceMetadata } from './source-metadata';

export class ModuleMetadata {
  public get baseDir() {
    return path.dirname(this.modulePath);
  }
  public static modules = new Map<string, ModuleMetadata>();

  public sourceTrees: SourceTree[];
  public definitions = new Map<string, TypeMetadata>();

  constructor(public modulePath: string, public defaultModules: ModuleMetadata[]) {
    ModuleMetadata.modules.set(modulePath, this);

    this.sourceTrees = glob
      .sync(path.resolve(modulePath, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => parseSourceFile(x));

    this.addDefaultModulesDefinitions();
    this.addCurrentModuleDefinitions();
    this.fillSourceTreesMetadata();
  }

  addDefaultModulesDefinitions() {
    for (const defaultModule of this.defaultModules) {
      for (const definition of defaultModule.definitions.values()) {
        this.definitions.set(definition.name, definition);
      }
    }
  }

  addCurrentModuleDefinitions() {
    for (const sourceTree of this.sourceTrees) {
      for (const definition of sourceTree.definitions) {
        if (definition instanceof ClassDefinitionTree)
          this.definitions.set(definition.id, new ClassTypeMetadata(definition));
      }
    }
  }

  fillSourceTreesMetadata() {
    for (const sourceTree of this.sourceTrees) {
      new SourceMetadata(sourceTree, this.baseDir, this.definitions);
    }
  }
}
