import { DefinitionTree } from '../../tree/definition/definition.tree';
import { MethodMetadata } from './method-metadata';
import { ModuleMember } from './module-member-metadata';
import { ParameterMetadata } from './parameter-metadata';
import { PropertyMetadata } from './property-metadata';

export class TypeMetadata extends ModuleMember {
  public location: string;
  public name: string;
  public genericParameters: string[];
  public baseType?: TypeMetadata;
  public properties: PropertyMetadata[];
  public methods: MethodMetadata[];

  public constructor(definition: DefinitionTree) {
    super();

    this.name = definition.name;
    this.properties = definition.properties.map((x) => new PropertyMetadata(x.property));
    this.methods = definition.methods.map((x) => new MethodMetadata(x.method));
  }

  // well no optional and rest parameters at now
  public findMethodBySignature(name: string, parameters: ParameterMetadata[]): MethodMetadata {
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

  public equals(other: TypeMetadata) {
    return (
      this.location === other.location &&
      this.name === other.name &&
      this.genericParameters.length === other.genericParameters.length
    );
  }

  public is(type: TypeMetadata) {
    return this.equals(type) || this.baseType?.is(type);
  }
}
