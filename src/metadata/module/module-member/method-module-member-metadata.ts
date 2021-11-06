import { MethodTree } from '../../../tree/method/method-tree';
import { ModuleMemberMetadata } from '../module-member-metadata';

export class MethodModuleMemberMetadata extends ModuleMemberMetadata {
  get name() {
    return this.tree.name;
  }

  get genericParameters() {
    return this.tree.genericParameters;
  }

  get parameters(): ParameterMetadata {
    return this.tree.parameters;
  }

  constructor(public sourcePath: string, public tree: MethodTree) {
    super();
  }
}
