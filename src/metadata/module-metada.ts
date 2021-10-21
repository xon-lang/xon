import { glob } from 'glob';
import * as path from 'path';
import { SourceTree } from '../tree/source/source-tree';
import { parseSourceFromFile } from '../tree/parse';
import { ModuleMember } from './module-member/module-member-metadata';
import { TypeMetadata } from './module-member/type-metadata';

export class Module {
  public members: Map<string, ModuleMember[]> = new Map<string, ModuleMember[]>();

  constructor(modulePath: string) {
    const files = glob.sync(path.resolve(modulePath, '**/*.xon'));
    for (const file of files) {
      const sourceFile = path.resolve(__dirname, file);
      const sourceTree = parseSourceFromFile(sourceFile);
      this.handleSourceFile(file, sourceTree);
    }
  }

  private handleSourceFile(sourcePath: string, source: SourceTree) {
    const importPath = path.dirname(sourcePath).replace(/[\/\\]/, '.');
    for (const member of source.members) {
      this.addMember(importPath, new TypeMetadata(member));
    }
  }

  private addMember(importPath, member: ModuleMember) {
    const value = this.members.get(importPath) || [];
    value.push(member);
    this.members.set(importPath, value);
  }
}
