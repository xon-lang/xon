import { glob } from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../tree/definition/class-definition/class-definition-tree';
import { parseSourceFile } from '../tree/parse';
import { ClassDefinitionMetadata } from './definition/class-definition/class-definition-metadata';
import { TypeMetadata } from './type-metadata';

export class ModuleMetadata {
  public baseDir: string;
  private defaultDefinition = new Map<string, TypeMetadata>();
  public definitions = new Map<string, TypeMetadata>();

  constructor(public modulePath: string, public defaultModules: ModuleMetadata[]) {
    this.baseDir = path.dirname(modulePath);

    for (const defaultModule of defaultModules) {
      for (const definition of defaultModule.definitions.values()) {
        this.defaultDefinition.set(definition.name, definition);
      }
    }

    const definitionsMatrix = glob
      .sync(path.resolve(modulePath, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => parseSourceFile(x).definitions);

    for (const definitions of definitionsMatrix)
      for (const definition of definitions) {
        if (!(definition instanceof ClassDefinitionTree)) continue;
        this.definitions.set(definition.name, new ClassDefinitionMetadata(definition));
      }
  }
}
