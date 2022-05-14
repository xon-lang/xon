import { lstatSync } from 'fs';
import glob from 'glob';
import path from 'path';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DefinitionStatementTree } from '../../tree/statement/definition/definition-statement-tree';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { parseSourceFile } from '../../util/parse';
import { getDeclarationMetadata } from '../declaration/declaration-metadata-helper';
import { DefinitionDeclarationMetadata } from '../declaration/definition/definition-declaration-metadata';
import { DeclarationScope } from './declaration-scope';

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): DefinitionDeclarationMetadata {
    return this.findByName('Boolean') as DefinitionDeclarationMetadata;
  }
  get integer(): DefinitionDeclarationMetadata {
    return this.findByName('Integer') as DefinitionDeclarationMetadata;
  }
  get float(): DefinitionDeclarationMetadata {
    return this.findByName('Float') as DefinitionDeclarationMetadata;
  }
  get number(): DefinitionDeclarationMetadata {
    return this.findByName('Number') as DefinitionDeclarationMetadata;
  }
  get none(): DefinitionDeclarationMetadata {
    return this.findByName('None') as DefinitionDeclarationMetadata;
  }

  constructor() {
    super();

    const corePath = 'src/lib/@xon/core';
    const stats = lstatSync(corePath);
    if (!stats.isDirectory()) throw new Error('Should be a directory');

    const globPath = path.resolve(corePath, '**/*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));

    for (const sourceTree of sources) {
      for (const statement of sourceTree.statements) {
        if (
          statement instanceof SourceTree ||
          statement instanceof ParameterTree ||
          statement instanceof ParameterStatementTree ||
          statement instanceof DefinitionStatementTree
        ) {
          const declaration = getDeclarationMetadata(statement, this);
          this.add(declaration);
        }
      }
    }
  }
}
