import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { MethodClassMemberTree } from '../../../tree/definition/class-definition/class-member/method-class-member/method-class-member-tree';
import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { MethodModuleMemberMetadata } from '../../module/module-member/method-module-member-metadata';
import { ParameterMetadata } from '../../module/module-member/parameter-module-member-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class ClassDefinitionMetadata extends DefinitionMetadata {
  public get name() {
    return this.tree.id;
  }

  public get genericParameters() {
    return this.tree.genericParameters;
  }

  private _properties: PropertyModuleMemberMetadata[];
  public get properties(): PropertyModuleMemberMetadata[] {
    if (this._properties) return this._properties;
    this._properties = this.tree.members
      .filter((x) => x instanceof PropertyClassMemberTree)
      .map((x) => (x as PropertyClassMemberTree).property)
      .map((x) => new PropertyModuleMemberMetadata(this.sourcePath, x));
    return this._properties;
  }

  private _methods: MethodModuleMemberMetadata[];
  public get methods(): MethodModuleMemberMetadata[] {
    if (this._methods) return this._methods;
    this._methods = this.tree.members
      .filter((x) => x instanceof MethodClassMemberTree)
      .map((x) => (x as MethodClassMemberTree).method)
      .map((x) => new MethodModuleMemberMetadata(this.sourcePath, x));
    return this._methods;
  }

  public constructor(public tree: ClassDefinitionTree) {
    super();
  }

  // well no optional and rest parameters at now
  public findMethodBySignature(
    name: string,
    parameters: ParameterMetadata[],
  ): MethodModuleMemberMetadata {
    const methodsByName = this.methods.filter((x) => x.name === name);
    if (!methodsByName.length) return null;

    const methodsByParametersLength = methodsByName.filter(
      (x) => x.parameters.length === parameters.length,
    );
    if (!methodsByParametersLength.length) return null;

    const methodsByExactParametersType = methodsByParametersLength.filter((x) =>
      x.parameters.every((z, i) => z.type.equals(parameters[i].type)),
    );
    if (methodsByParametersLength.length === 1) return methodsByExactParametersType[0];
    if (methodsByParametersLength.length > 1) throw `Ambiguous methods '${name}'`;

    const methodsByInheritedParametersType = methodsByParametersLength.filter((x) =>
      x.parameters.every((z, i) => z.type.is(parameters[i].type)),
    );
    if (methodsByParametersLength.length === 1) return methodsByInheritedParametersType[0];
    if (methodsByParametersLength.length > 1) throw `Ambiguous methods '${name}'`;

    return null;
  }

  public equals(other: ClassTypeMetadata) {
    return (
      this.sourcePath === other.sourcePath &&
      this.name === other.name &&
      this.genericParameters.length === other.genericParameters.length
    );
  }
}
