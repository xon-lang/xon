import { glob } from 'glob';
import * as path from 'path';
import { parseSourceFile } from '../tree/parse';
import { ClassTypeSourceMemberTree } from '../tree/source/source-member/class-type-source-member/class-type-source-member-tree';
import { MethodSourceMemberTree } from '../tree/source/source-member/method-source-member/method-source-member-tree';
import { SourceMemberTree } from '../tree/source/source-member/source-member.tree';
import { getModuleMemberMetadata } from './module/module-member-metadata-helper';
import { TypeMetadata } from './type/type-metadata';

export class ModuleMetadata {
  public types: TypeMetadata[];

  constructor(modulePath: string) {
    const pathSourceTreeList = glob
      .sync(path.resolve(modulePath, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => ({
        sourcePath: x,
        sourceTree: parseSourceFile(x),
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
      .forEach((x) => this.addMember(x));

    pathSourceMemberList
      .filter((x) => x.sourceMember instanceof MethodSourceMemberTree)
      .forEach((x) => this.addMember(x));
  }

  private addMember({
    sourcePath,
    sourceMember,
  }: {
    sourcePath: string;
    sourceMember: SourceMemberTree;
  }) {
    const moduleMemberMetadata = getModuleMemberMetadata(sourcePath, sourceMember);
    const sourceFolder = path.dirname(sourcePath);
    const value = this.members.get(sourceFolder) || [];
    value.push(moduleMemberMetadata);
    this.members.set(sourceFolder, value);
  }
}
