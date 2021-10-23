import { MethodTree } from '../../../tree/method/method-tree';
import { ModuleMemberMetadata } from '../module-member-metadata';

export class MethodModuleMemberMetadata extends ModuleMemberMetadata {
  public get name() {
    return this.tree.name;
  }

  public get genericParameters() {
    return this.tree.genericParameters;
  }

  public get parameters(): ParameterMetadata {
    return this.tree.parameters;
  }

  public constructor(public sourcePath: string, public tree: MethodTree) {
    super();
  }
}
