import { glob } from 'glob';
import * as path from 'path';
import { ClassTypeTree } from '../tree/class-type/class-type-tree';
import { parseSourceFile } from '../tree/parse';
import { ClassTypeSourceMemberTree } from '../tree/source/source-member/class-type-source-member/class-type-source-member-tree';
import { SourceMemberTree } from '../tree/source/source-member/source-member.tree';
import { ClassTypeMetadata } from './type/class-type-metadata';
import { TypeMetadata } from './type/type-metadata';

export class ModuleMetadata {
  public types = new Map<string, TypeMetadata>();

  constructor(modulePath: string) {
    const pathSourceTreeList = glob
      .sync(path.resolve(modulePath, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => ({
        sourcePath: x,
        sourceTree: parseSourceFile(x).members,
      }));

    const pathSourceMemberList = pathSourceTreeList.reduce(
      (arr, x) => (
        x.sourceTree.members.forEach((z) =>
          arr.push({ sourcePath: x.sourcePath, sourceMember: z }),
        ),
        arr
      ),
      [] as { sourcePath: string; sourceMember: SourceMemberTree }[],
    );

    pathSourceMemberList
      .filter((x) => x.sourceMember instanceof ClassTypeSourceMemberTree)
      .forEach((x) => this.handleTypeDeclarationHeader(x.sourceMember));
  }

  handleTypeDeclarationHeader(typeDeclaration: ClassTypeTree) {
    if (typeDeclaration instanceof ClassTypeSourceMemberTree) {
      this.types.set(typeDeclaration.name, new ClassTypeMetadata(typeDeclaration));
    }
  }
}
