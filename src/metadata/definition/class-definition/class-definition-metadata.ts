import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { MethodModuleMemberMetadata } from '../../module/module-member/method-module-member-metadata';
import { ParameterMetadata } from '../../module/module-member/parameter-module-member-metadata';
import { DefinitionMetadata } from '../definition-metadata';
import { MethodClassMemberMetadata } from './method-class-member-metadata';
import { PropertyClassMemberMetadata } from './property-class-member-metadata';

export class ClassDefinitionMetadata extends DefinitionMetadata {
  public name: string;
  public properties: PropertyClassMemberMetadata[] = [];
  public methods: MethodClassMemberMetadata[] = [];

  public constructor(
    public tree: ClassDefinitionTree,
    public genericParameters: DefinitionMetadata[] = [],
  ) {
    super();
    this.name = tree.id.text;
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

  public equals(other: ClassDefinitionMetadata) {
    return (
      this.sourcePath === other.sourcePath &&
      this.name === other.name &&
      this.genericParameters.length === other.genericParameters.length
    );
  }
}
