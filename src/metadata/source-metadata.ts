import { ClassDefinitionTree } from '../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { ImportTree } from '../tree/import/import.tree';
import { BooleanLiteralTree } from '../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../tree/literal/integer-literal/integer-literal.tree';
import { LiteralTree } from '../tree/literal/literal.tree';
import { StringLiteralTree } from '../tree/literal/string-literal/string-literal.tree';
import { SourceTree } from '../tree/source/source-tree';
import { DefinitionMetadata } from './definition/definition-metadata';
import { ModuleMetadata } from './module-metadata';

export class SourceMetadata {
  public definitions = new Map<string, DefinitionMetadata>();

  public constructor(
    public sourceTree: SourceTree,
    public baseDir: string,
    public defaultDefinitions: Map<string, DefinitionMetadata>,
  ) {
    this.addDefaultDefinitions();
    this.addImportsDefinitions();
    this.addSourceDefinitions();

    for (const definitionTree of sourceTree.definitions) {
      this.setDefinitionMetadata(definitionTree);
    }
  }

  addDefaultDefinitions() {
    for (const definition of this.defaultDefinitions.values()) {
      this.definitions.set(definition.name, definition);
    }
  }

  addImportsDefinitions() {
    for (const importTree of this.sourceTree.imports.filter((x) => !x.members)) {
      for (const definition of this.findModuleImport(importTree).definitions.values()) {
        this.definitions.set(definition.name, definition);
      }
    }
    for (const importTree of this.sourceTree.imports.filter((x) => x.members)) {
      const moduleDefinitions = this.findModuleImport(importTree).definitions;
      for (const member of importTree.members) {
        if (!moduleDefinitions.has(member.name))
          throw new Error(`Not found '${member.name}' in '${importTree.path}'`);

        this.definitions.set(member.alias || member.name, moduleDefinitions.get(member.name));
      }
    }
  }

  addSourceDefinitions() {
    for (const definitionTree of this.sourceTree.definitions) {
      if (!this.defaultDefinitions.has(definitionTree.name))
        throw new Error(`Not found '${definitionTree.name}'`);
      this.definitions.set(definitionTree.name, this.defaultDefinitions.get(definitionTree.name));
    }
  }

  findModuleImport(importTree: ImportTree) {
    return ModuleMetadata.modules.get(importTree.path.replace('.', '/'));
  }


  setDefinitionMetadata(tree: DefinitionTree) {
    tree.metadata = this.findDefinition(tree.name);
    if (tree instanceof ClassDefinitionTree) {
      this.setClassPropertiesMetadata(tree);
      this.setClassMethodsMetadata(tree);
    }
  }



 
}
