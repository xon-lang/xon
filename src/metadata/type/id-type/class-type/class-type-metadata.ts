import { ClassDefinitionTree } from '../../../../tree/definition/class-definition/class-definition-tree';
import { SourceReference } from '../../../../tree/source-reference';
import { TypeMetadata } from '../../type-metadata';
import { IdTypeMetadata } from '../id-type-metadata';
import { MethodClassMemberMetadata } from './method-class-member-metadata';
import { PropertyClassMemberMetadata } from './property-class-member-metadata';

export class ClassTypeMetadata extends IdTypeMetadata {
  sourceReference: SourceReference;
  name: string;
  genericArguments: TypeMetadata[] = [];
  properties: PropertyClassMemberMetadata[] = [];
  methods: MethodClassMemberMetadata[] = [];

  constructor(tree: ClassDefinitionTree, genericArguments: TypeMetadata[]) {
    super();
    this.sourceReference = tree.id.sourceReference;
    this.name = tree.id.text;
    this.genericArguments = genericArguments;
    const classGenericArguments = tree.genericParameters.reduce(
      (o, x, i) => ((o[x.text] = genericArguments[i]), o),
      {},
    );
    this.properties = tree.properties.map(
      (x) => new PropertyClassMemberMetadata(x, classGenericArguments),
    );
    this.methods = tree.methods.map((x) => new MethodClassMemberMetadata(x, classGenericArguments));
  }

  // well no optional and rest parameters at now
  // public findMethodBySignature(
  //   name: string,
  //   parameters: ParameterMetadata[],
  // ): MethodModuleMemberMetadata {
  //   const methodsByName = this.methods.filter((x) => x.name === name);
  //   if (!methodsByName.length) return null;

  //   const methodsByParametersLength = methodsByName.filter(
  //     (x) => x.parameters.length === parameters.length,
  //   );
  //   if (!methodsByParametersLength.length) return null;

  //   const methodsByExactParametersType = methodsByParametersLength.filter((x) =>
  //     x.parameters.every((z, i) => z.type.equals(parameters[i].type)),
  //   );
  //   if (methodsByParametersLength.length === 1) return methodsByExactParametersType[0];
  //   if (methodsByParametersLength.length > 1) throw `Ambiguous methods '${name}'`;

  //   const methodsByInheritedParametersType = methodsByParametersLength.filter((x) =>
  //     x.parameters.every((z, i) => z.type.is(parameters[i].type)),
  //   );
  //   if (methodsByParametersLength.length === 1) return methodsByInheritedParametersType[0];
  //   if (methodsByParametersLength.length > 1) throw `Ambiguous methods '${name}'`;

  //   return null;
  // }

  // public equals(other: ClassDefinitionMetadata) {
  //   return (
  //     this.sourcePath === other.sourcePath &&
  //     this.name === other.name &&
  //     this.genericParameters.length === other.genericParameters.length
  //   );
  // }
}
